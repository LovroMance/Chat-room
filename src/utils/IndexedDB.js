// IndexedDB 基本操作封装

// 数据库名称
const DB_NAME = 'ChatDB'
// 数据库存储对象名称（LIKE TABLE）
// 聊天历史表
const CHAT_STORE_NAME = 'chatHistory'
const DB_VERSION = 1

// 用于缓存数据库实例
let dbInstance = null

// 打开数据库
export function openDB() {
  return new Promise((resolve, reject) => {
    // 如果已经打开了，就直接返回数据库实例
    if (dbInstance) {
      resolve(dbInstance)
      return
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION)
    request.onerror = () => {
      reject('数据库打开失败')
    }
    request.onsuccess = () => {
      dbInstance = request.result
      resolve(dbInstance)
    }
    request.onupgradeneeded = (event) => {
      const db = event.target.result
      if (!db.objectStoreNames.contains(CHAT_STORE_NAME)) {
        db.createObjectStore(CHAT_STORE_NAME, { keyPath: 'LocalMessageId', autoIncrement: true })
      }
    }
  })
}

// 添加一条聊天记录
export async function addChatRecord(record) {
  // 在Chat.vue中使用时，我已经提前进行了openDB()操作，所以这里不再重复打开数据库操作
  // 下面是兼容方法，可以忽略上一行注释
  // 如果没有打开数据库，先打开数据库
  if (!dbInstance) {
    await openDB()
  }
  const db = dbInstance
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CHAT_STORE_NAME, 'readwrite')
    const store = tx.objectStore(CHAT_STORE_NAME)
    const request = store.add(record)
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject('添加聊天记录失败')
  })
}

// 批量添加聊天记录
export async function addChatRecords(records) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CHAT_STORE_NAME, 'readwrite')
    const store = tx.objectStore(CHAT_STORE_NAME)
    let count = 0
    for (const record of records) {
      const request = store.add(record)
      request.onsuccess = () => {
        count++
        if (count === records.length) resolve(true)
      }
      request.onerror = () => reject('批量添加聊天记录失败')
    }
  })
}

// 获取所有聊天记录
export async function getAllChatRecords() {
  if (!dbInstance) {
    await openDB()
  }
  const db = dbInstance
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CHAT_STORE_NAME, 'readonly')
    const store = tx.objectStore(CHAT_STORE_NAME)
    const request = store.getAll()
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject('获取聊天记录失败')
  })
}

navigator.storage.estimate().then((estimate) => {
  console.log(`可用空间: ${estimate.quota - estimate.usage} bytes`);
  console.log(`总配额: ${estimate.quota} bytes`); // 通常为硬盘的50%
});
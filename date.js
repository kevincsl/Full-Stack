// 創建一個新的日期物件，代表當前日期和時間
const now = new Date();
console.log('現在的日期和時間:', now);

// 創建一個指定日期的日期物件
const specificDate = new Date('2023-10-01');
console.log('指定的日期:', specificDate);

// 獲取日期的各個部分
const year = now.getFullYear();
const month = now.getMonth() + 1; // 月份從0開始，所以需要加1
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(`現在是 ${year} 年 ${month} 月 ${date} 日 ${hours} 時 ${minutes} 分 ${seconds} 秒`);

// 日期運算 - 加一天
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log('明天的日期:', tomorrow);

// 日期運算 - 減一個月
const lastMonth = new Date(now);
lastMonth.setMonth(now.getMonth() - 1);
console.log('上個月的今天:', lastMonth);

// 計算兩個日期之間的差異（以天為單位）
const date1 = new Date('2023-01-01');
const date2 = new Date('2023-12-31');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(`兩個日期之間的差異是 ${diffDays} 天`);
// javascript非同步操作與同步操作的差異

// 同步操作: 一個操作完成後, 才能執行下一個操作
// 1. 函式的return
function add(a, b) {
    return a + b;
  }
  const sum = add(3, 5);
  console.log(sum); // 8
  
  // 2. 函式的預設值
  function greet(name = 'World') {
    console.log(`Hello, ${name}!`);
  }
  greet(); // Hello, World!
  greet('Alice'); // Hello, Alice!

// 非同步操作: 一個操作開始後, 不用等待操作完成, 就可以執行下一個操作
// 1. 函式的Promise與Promise.all(),處理非同步的操作, 例如: 讀取檔案、發送請求, 等待操作完成後才執行下一個操作
// 2. 定義async函式, 用來執行非同步操作, 並等待操作完成後, 再執行下一個操作
// 3. 使用await, 等待非同步操作完成後, 再執行下一個操作
// 4. 使用try/catch, 處理錯誤

// 1.1 Promise的使用
function fetchData() {
    return new Promise((resolve, reject) => { // 建立Promise物件, resolve: 成功, reject: 失敗
      setTimeout(() => { // 模擬非同步操作
        resolve('Data fetched!'); // 成功時呼叫resolve(), 並回傳資料  
      }, 2000); // 2秒後執行
    });
  }
  fetchData().then(data => {
    console.log(data); // Data fetched!
  });

 // 1.2 Promise.all()的使用
    function fetchData1() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched 1!');
        }, 2000);
        });
    }
  
    function fetchData2() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched 2!');
        }, 3000);
        });
    }

    Promise.all([fetchData1(), fetchData2()]).then(data => {
        console.log(data); // ['Data fetched 1!', 'Data fetched 2!']
    }

// 2. 函式的async/await, 使用async/await, 簡化Promise的使用
    async function fetchData3() { // 定義async函式, 用來執行非同步操作, 並等待操作完成後, 再執行下一個操作
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve('Data fetched!'); // 成功時呼叫resolve(), 並回傳資料
            }, 2000); // 2秒後執行
        });
        }
    async function fetchData4() { // 定義async函式, 用來執行非同步操作, 並等待操作完成後, 再執行下一個操作
            const data = await fetchData3(); // 等待fetchData1()執行完成, 再執行下一行程式
            console.log(data); // Data fetched!, 印出Data fetched!
        }
    fetchData4();

// 3. 使用try/catch, 處理錯誤

    async function fetchData5() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error!'); // 失敗時呼叫reject(), 並回傳錯誤訊息
        }, 2000);
        });
    }
    async function fetchData6() {
        try {
        const data = await fetchData5();
        console.log(data);
        } catch (error) {
        console.log(error); // Error!
        }
    }
    fetchData6();
    
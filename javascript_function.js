//Javascript Array定義與使用
// 1. 定義陣列
const fruits = ['apple', 'banana', 'cherry'];
// 2. 存取陣列元素
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
// 3. 陣列的屬性
console.log(fruits.length); // 3
// 4. 陣列的方法
// 4.1 push() - 新增元素到陣列末端
fruits.push('date');
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']
// 4.2 pop() - 移除陣列末端的元素
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'cherry']
// 4.3 unshift() - 新增元素到陣列開頭
fruits.unshift('date');
console.log(fruits); // ['date', 'apple', 'banana', 'cherry']
// 4.4 shift() - 移除陣列開頭的元素
fruits.shift();
console.log(fruits); // ['apple', 'banana', 'cherry']
// 4.5 splice() - 刪除、新增或取代陣列的元素
fruits.splice(1, 1, 'date');
console.log(fruits); // ['apple', 'date', 'cherry']
// 4.6 slice() - 回傳陣列的一部分
const newFruits = fruits.slice(1, 2);
console.log(newFruits); // ['date']
// 4.7 concat() - 合併陣列
const moreFruits = ['fig', 'grape'];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'date', 'cherry', 'fig', 'grape']
// 4.8 join() - 將陣列轉換成字串
const fruitString = fruits.join(', ');
console.log(fruitString); // 'apple, date, cherry'

//Javascript String定義與使用
// 1. 定義字串
const str1 = 'Hello, World!';
const str2 = "Hello, World!";
const str3 = `Hello, World!`;
// 2. 存取字串中的字元
console.log(str1[0]); // H
console.log(str1.charAt(1)); // e
// 3. 字串的屬性
console.log(str1.length); // 13
// 4. 字串的方法
// 4.1 toUpperCase() - 將字串轉換成大寫
console.log(str1.toUpperCase()); // HELLO, WORLD!
// 4.2 toLowerCase() - 將字串轉換成小寫
console.log(str1.toLowerCase()); // hello, world!
// 4.3 concat() - 串接字串
console.log(str1.concat(' Goodbye!')); // Hello, World! Goodbye!
// 4.4 slice() - 回傳字串的一部分
console.log(str1.slice(7)); // World!
// 4.5 substring() - 回傳字串的一部分
console.log(str1.substring(7, 12)); // World
// 4.6 substr() - 回傳字串的一部分
console.log(str1.substr(7, 5)); // World
// 4.7 split() - 將字串拆分成陣列
console.log(str1.split(', ')); // ['Hello', 'World!']
// 4.8 replace() - 取代字串中的文字
console.log(str1.replace('World', 'Taiwan')); // Hello, Taiwan!
// 4.9 indexOf() - 尋找字串中的文字
console.log(str1.indexOf('World')); // 7
// 4.10 lastIndexOf() - 尋找字串中的文字
console.log(str1.lastIndexOf('o')); // 8
// 4.11 includes() - 檢查字串中是否包含指定的文字
console.log(str1.includes('World')); // true
// 4.12 startsWith() - 檢查字串是否以指定的文字開頭
console.log(str1.startsWith('Hello')); // true
// 4.13 endsWith() - 檢查字串是否以指定的文字結尾
console.log(str1.endsWith('World!')); // true

//Javascript Object定義與使用
// 1. 定義物件
const person = {
  name: 'Alice',
    age: 25,
};
// 2. 存取物件的屬性
console.log(person.name); // Alice
console.log(person['age']); // 25

// 3. 物件的方法
// 3.1 Object.keys() - 取得物件的所有鍵
const keys = Object.keys(person);
console.log(keys); // ['name', 'age']
// 3.2 Object.values() - 取得物件的所有值
const values = Object.values(person);
console.log(values); // ['Alice', 25]
// 3.3 Object.entries() - 取得物件的所有鍵值對
const entries = Object.entries(person);
console.log(entries); // [['name', 'Alice'], ['age', 25]]
// 3.4 Object.assign() - 合併物件
const info = { job: 'Engineer' };
const newPerson = Object.assign({}, person, info);
console.log(newPerson); // { name: 'Alice', age: 25, job: 'Engineer' }
// 3.5 Object.freeze() - 凍結物件, 防止修改物件的屬性, 但不會防止刪除或新增屬性
Object.freeze(person);
person.age = 30; // 無效操作
console.log(person.age); // 25
// 3.6 Object.seal() - 密封物件, 防止新增或刪除物件的屬性, 但可以修改屬性的值, 
// 但不會防止修改屬性的屬性, 例如: writable, configurable, enumerable, get, set, value, writable, enumerable, configurable
Object.seal(person);
person.age = 30; // 有效操作
console.log(person.age); // 30

//Javascript Function定義與使用
// 1. 定義函式
function sayHello() {
  console.log('Hello, World!');
}
// 2. 呼叫函式
sayHello(); // Hello, World!
// 3. 函式的參數
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Alice'); // Hello, Alice!
// 4. 函式的回傳值
function add(a, b) {
  return a + b;
}
const sum = add(3, 5);
console.log(sum); // 8
// 5. 函式的預設值
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, World!
greet('Alice'); // Hello, Alice!

// 6. 函式的剩餘參數, 使用Rest parameter, 以陣列的方式存取所有的參數
function sum_f(...numbers) {
  return numbers.reduce((total, num) => total + num, 0); // 使用reduce()方法計算總和
  // 或是使用for迴圈計算總和, 例如:
    // let total = 0;
    // for (let num of numbers) {
    //   total += num;
    // }
}
const total = sum_f(1, 2, 3, 4, 5);
console.log(total); // 15

// 7. 函式的展開參數, 使用Spread operator, 將陣列展開成參數
function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
const person2 = ['Alice', 25];
greet(...person2); // Hello, Alice! You are 25 years old.

// 8. 函式的箭頭函式, 使用Arrow function, 簡化函式的寫法
const sayHello1 = () => {
  console.log('Hello, World!');
};
sayHello1(); // Hello, World!
// 或是簡化成一行
const sayHello2 = () => console.log('Hello, World!');
sayHello2(); // Hello, World!
// 有參數的箭頭函式
const greet1 = name => console.log(`Hello, ${name}!`);
greet1('Alice'); // Hello, Alice!
// 有多個參數的箭頭函式
const add1 = (a, b) => a + b;
const sum2 = add1(3, 5);
console.log(sum2); // 8
// 無參數的箭頭函式
const sayHello3 = () => console.log('Hello, World!');
sayHello3(); // Hello, World!
// 有多行程式碼的箭頭函式
const greet2 = name => {
  console.log(`Hello, ${name}!`);
  console.log('How are you?');
};
greet2('Alice'); // Hello, Alice! How are you?

// 9. 函式的回調函式, 使用Callback function, 將函式當作參數傳遞給另一個函式
function greet3(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}
function sayGoodbye1() {
  console.log('Goodbye!');
}
greet3('Alice', sayGoodbye1); // Hello, Alice! Goodbye!

// 10. 函式的遞迴, 使用Recursion, 函式呼叫自己
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
const result = factorial(5);
console.log(result); // 120

// 11. 函式的閉包, 使用Closure, 函式可以存取外部函式的變數
function outer() {
  const message = 'Hello, World!';
  function inner() {
    console.log(message);
  }
  return inner;
}
const innerFunction = outer();
innerFunction(); // Hello, World!

// 12. 函式的柯里化, 使用Currying, 將多個參數的函式轉換成一個參數的函式
function add2(a) {
  return function(b) {
    return a + b;
  };
}   
const sum3 = add2(3)(5);
console.log(sum3); // 8

// 13. 函式的偏函式應用, 使用Partial application, 將多個參數的函式轉換成少數參數的函式
function add3(a, b, c) {
  return a + b + c;
}
const addPartial = add3.bind(null, 3, 5);
const sum4 = addPartial(7);
console.log(sum4); // 15

// 14. 函式的函數式編程, 使用Functional programming, 使用函式來處理資料
const numbers = [1, 2, 3, 4, 5];
const sum5 = numbers.reduce((total, num) => total + num, 0);
console.log(sum5); // 15

// 15. 函式的Promise, 使用Promise, 處理非同步的操作, 例如: 讀取檔案、發送請求, 等待操作完成後才執行下一個操作
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

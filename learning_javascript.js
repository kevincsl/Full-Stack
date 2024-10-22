// Code: Learning JavaScript
//基本變數

// JavaScript 是一種弱型別語言，變數的型別會在執行時期自動判斷。
// 在 JavaScript 中，變數的宣告方式有三種，分別是 var、let 和 const。
// var 是 ES5 的宣告變數的方式，let 和 const 是 ES6 的宣告變數的方式。
// var 可以被重新賦值，let 和 const 則不行。
// const 用來宣告常數，宣告後不可被重新賦值。

// 使用 var 宣告變數
var name = "Alice";
console.log(name); // 輸出: Alice

// 使用 let 宣告變數
let age = 25;
console.log(age); // 輸出: 25

// 使用 const 宣告常數
const pi = 3.14159;
console.log(pi); // 輸出: 3.14159


//變數的命名規則
// 在 JavaScript 中，變數的命名規則如下：
// 變數名稱可以包含字母、數字、底線 (_) 和美元符號 ($)。
// 變數名稱必須以字母、底線 (_) 或美元符號 ($) 開頭。
// 變數名稱區分大小寫。
// 變數名稱不可以是 JavaScript 保留字。

// 正確的變數命名
let firstName = "Alice";
let _lastName = "Lin";
let $age = 25;
let user_name = "Alice";

// 錯誤的變數命名
// let 1stName = "Alice"; // 錯誤，變數名稱不能以數字開頭
// let first-name = "Alice"; // 錯誤，變數名稱不能包含連字符
// let first name = "Alice"; // 錯誤，變數名稱不能包含空格
// let let = "Alice"; // 錯誤，變數名稱不能是
// JavaScript 保留字


//資料型別
// 在 JavaScript 中，資料型別分為基本型別和物件型別。
// 基本型別包括數值、字串、布林值、null、undefined 和符號。
// 物件型別包括物件、陣列和函式。

// 數值
let num = 123;
console.log(num); // 輸出: 123

// 字串
let str = "Hello, World!";
console.log(str); // 輸出: Hello, World!

// 布林值
let isTrue = true;
console.log(isTrue); // 輸出: true

// null 表示變數的值為空
let n = null;

// undefined 表示變數未定義
let u = undefined;

// null 和 undefined 的差異
console.log(null == undefined); // 輸出: true
console.log(null === undefined); // 輸出: false
// == 是比較兩個變數的值是否相等 ===

//符號
// 在 ES6 中新增了一種資料型別，叫做符號（Symbol）。
// 符號是一種唯一的、不可變的資料型別，用來表示唯一的值。
// 符號的值是唯一的，不可以被重複。

// 宣告一個符號
let sym = Symbol("foo");
console.log(sym); // 輸出: Symbol(foo)
let sym2 = Symbol("foo");
console.log(sym2); // 輸出: Symbol(foo)
console.log(sym === sym2); // 輸出: false

//物件
// 在 JavaScript 中，物件是一種複合型別，用來存儲多個值。
// 物件是由一組鍵值對（key-value pair）組成的集合。
// 鍵（key）是一個字串，值（value）可以是任何資料型別。

// 宣告一個物件
let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true
};
console.log(person.firstName); // 輸出: John
console.log(person["lastName"]); // 輸出: Doe


var person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true
};
console.log(person.firstName); // 輸出: John
console.log(person["lastName"]); // 輸出: Doe





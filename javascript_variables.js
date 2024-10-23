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

// 使用 const 宣告常數  不能重新賦值
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
let person = {
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


//陣列
// 在 JavaScript 中，陣列是一種有序的集合，用來存儲多個值。
// 陣列是一種特殊的物件，用來存儲多個值。
// 陣列的元素可以是任何資料型別，包括數值、字串、物件、陣列等。

// 宣告一個陣列
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // 輸出: Apple
console.log(fruits[1]); // 輸出: Banana
console.log(fruits[2]); // 輸出: Orange
// 陣列的索引從 0 開始，所以 fruits[0] 是第一個元素，fruits[1] 是第二個元素，以此類推。
// 陣列的長度可以通過 length 屬性獲取。
console.log(fruits.length); // 輸出: 3
// 陣列的元素可以通過索引訪問，也可以通過索引修改。
fruits[0] = "Mango";
console.log(fruits[0]); // 輸出: Mango
// 陣列的元素可以通過索引添加。
fruits[3] = "Grapes";
console.log(fruits[3]); // 輸出: Grapes
console.log(fruits.length); // 輸出: 4
// 陣列的元素可以通過索引刪除。
delete fruits[0];
console.log(fruits[0]); // 輸出: undefined
console.log(fruits.length); // 輸出: 4
// 陣列的元素可以通過 push() 方法添加到陣列的末尾。
fruits.push("Pineapple");
console.log(fruits[4]); // 輸出: Pineapple
console.log(fruits.length); // 輸出: 5
// 陣列的元素可以通過 pop() 方法從陣列的末尾刪除。
fruits.pop();
console.log(fruits[4]); // 輸出: undefined
console.log(fruits.length); // 輸出: 4
// 陣列的元素可以通過 shift() 方法從陣列的開頭刪除。
fruits.shift();
console.log(fruits[0]); // 輸出: Banana
console.log(fruits.length); // 輸出: 3
// 陣列的元素可以通過 unshift() 方法添加到陣列的開頭。
fruits.unshift("Apple");
console.log(fruits[0]); // 輸出: Apple
console.log(fruits.length); // 輸出: 4
// 陣列的元素可以通過 splice() 方法刪除或插入。
fruits.splice(1, 1); // 刪除第二個元素
console.log(fruits[1]); // 輸出: Orange
console.log(fruits.length); // 輸出: 3
fruits.splice(1, 0, "Banana"); // 在第二個位置插入 Banana
console.log(fruits[1]); // 輸出: Banana
console.log(fruits.length); // 輸出: 4
// 陣列的元素可以通過 slice() 方法複製。
let newFruits = fruits.slice();
console.log(newFruits); // 輸出: ["Apple", "Banana", "Orange", "Grapes"]
// 陣列的元素可以通過 forEach() 方法遍歷。
fruits.forEach(function (item, index) {
    console.log(index, item);
});
// 輸出:
// 0 "Apple"
// 1 "Banana"
// 2 "Orange"
// 3 "Grapes"
// 陣列的元素可以通過 map() 方法映射。
let newFruits1 = fruits.map(function (item) {
    return item.toUpperCase();
});
console.log(newFruits1); // 輸出: ["APPLE", "BANANA", "ORANGE", "GRAPES"]
// 陣列的元素可以通過 filter() 方法過濾。
let newFruits2 = fruits.filter(function (item) {
    return item.length > 5;
});
console.log(newFruits2); // 輸出: ["Banana", "Orange", "Grapes"]
// 陣列的元素可以通過 reduce() 方法累加。
// 計算陣列中所有元素的長度之和

let total = newFruits2.reduce(function (acc, item) {
    return acc + item.length;
}, 0);
console.log(total); // 輸出: 18
// 陣列的元素可以通過 every() 方法判斷是否符合條件。
let isLong = fruits.every(function (item) {
    return item.length > 5;
});
console.log(isLong); // 輸出: false


//多維陣列
// 在 JavaScript 中，陣列的元素也可以是陣列，這樣就形成了多維陣列。
// 多維陣列是一種包含多個陣列的陣列，用來存儲多維數據。
// 多維陣列的元素可以是任何資料型別，包括數值、字串、物件、陣列等。

// 宣告一個二維陣列
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); // 輸出: 1
console.log(matrix[1][1]); // 輸出: 5
console.log(matrix[2][2]); // 輸出: 9
// 二維陣列的元素可以通過索引訪問，也可以通過索引修改。
matrix[0][0] = 10;
console.log(matrix[0][0]); // 輸出: 10
// 二維陣列的元素可以通過索引添加。
matrix[0][3] = 11;
console.log(matrix[0][3]); // 輸出: 11
// 二維陣列的元素可以通過索引刪除。
delete matrix[0][0];
console.log(matrix[0][0]); // 輸出: undefined
// 二維陣列的元素可以通過 push() 方法添加到陣列的末尾。
matrix[1].push(12);
console.log(matrix[1][3]); // 輸出: 12
// 二維陣列的元素可以通過 pop() 方法從陣列的末尾刪除。
matrix[1].pop();
console.log(matrix[1][2]); // 輸出: 6
// 二維陣列的元素可以通過 shift() 方法從陣列的開頭刪除。
matrix[2].shift();
console.log(matrix[2][0]); // 輸出: 8
// 二維陣列的元素可以通過 unshift() 方法添加到陣列的開頭。
matrix[2].unshift(13);
console.log(matrix[2][0]); // 輸出: 13
// 二維陣列的元素可以通過 splice() 方法刪除或插入。
matrix[1].splice(1, 1); // 刪除第二個元素
console.log(matrix[1][1]); // 輸出: 6
matrix[1].splice(1, 0, 5); // 在第二個位置插入 5
console.log(matrix[1][1]); // 輸出: 5
// 二維陣列的元素可以通過 slice() 方法複製。
let newMatrix = matrix.slice();
console.log(newMatrix); // 輸出: [[10, 2, 3, 11], [4, 5, 6], [13, 8, 9]]
// 二維陣列的元素可以通過 forEach() 方法遍歷。
matrix.forEach(function (row, rowIndex) {
    row.forEach(function (item, itemIndex) {
        console.log(rowIndex, itemIndex, item);
    });
});




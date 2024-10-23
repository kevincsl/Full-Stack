// Javascript - operator ,list all the operators in javascript and give examples

// 1. 算術運算子 Arithmetic Operators 範例
let a = 10;
let b = 5;
console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus: 0
console.log(a ** b); // Exponentiation: 100000

// 2. 賦值運算子 Assignment Operators 說明與範例
let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // 15
x -= 3; // Equivalent to x = x - 3
console.log(x); // 12
x *= 2; // Equivalent to x = x * 2
console.log(x); // 24
x /= 4; // Equivalent to x = x / 4
console.log(x); // 6
x %= 3; // Equivalent to x = x % 3
console.log(x); // 0

// 3. 比較運算子 Comparison Operators 說明與範例
console.log(a == b); // Equal to: false
console.log(a != b); // Not equal to: true
console.log(a === b); // Strict equal to: false
console.log(a !== b); // Strict not equal to: true
console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal to: true
console.log(a <= b); // Less than or equal to: false

// 4. 邏輯運算子 Logical Operators 說明與範例
let c = true;
let d = false;
console.log(c && d); // Logical AND: false
console.log(c || d); // Logical OR: true
console.log(!c); // Logical NOT: false

// 5. 位元運算子 Bitwise Operators
console.log(a & b); // Bitwise AND: 0
console.log(a | b); // Bitwise OR: 15
console.log(a ^ b); // Bitwise XOR: 15
console.log(~a); // Bitwise NOT: -11
console.log(a << 1); // Left shift: 20
console.log(a >> 1); // Right shift: 5
console.log(a >>> 1); // Zero-fill right shift: 5

// 6. 字串運算子 String Operators
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Concatenation: "Hello World"

// 7. 條件（三元）運算子 Conditional (Ternary) Operator
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

// 8. 逗號運算子 Comma Operator
let e = (1, 2, 3);
console.log(e); // 3

// 9. 一元運算子 Unary Operators
let f = 5;
console.log(++f); // Increment: 6
console.log(--f); // Decrement: 5

// 10. 關係運算子 Relational Operators
let arr = [1, 2, 3];
console.log(2 in arr); // false (checks for index, not value)
console.log("length" in arr); // true (checks for property)

// 11. typeof 運算子 Type Operators
console.log(typeof a); // "number"
console.log(typeof str1); // "string"

// 12. 刪除運算子 Delete Operator
let obj = { name: "John", age: 30 };
delete obj.age;
console.log(obj); // { name: "John" }

// 13. in 運算子 In Operator
console.log("name" in obj); // true
console.log("age" in obj); // false

// 14. instanceof 運算子 Instanceof Operator
console.log(arr instanceof Array); // true
console.log(obj instanceof Object); // true

// 15. void 運算子 Void Operator
void function() {
    console.log("This will not return anything");
}();

// 16. new 運算子 New Operator
let date = new Date();
console.log(date); // Current date and time

// 17. this 運算子 This Operator
let person = {
    name: "Alice",
    greet: function() {
        console.log(this.name);
    }
};
person.greet(); // "Alice"

// 18. Spread 運算子 Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
// JSON文件處理技術
// JSON是一種輕量級的數據交換格式，易於人閱讀和撰寫，同時也易於機器解析和生成。
// JSON基於JavaScript編程語言的子集，標準ECMA-262第3版（1999年12月）。
// JSON獨立於語言，但使用C語言風格的編程環境，包括C、C++、C#、Java、JavaScript、Perl、Python等。
// JSON文檔的MIME類型是application/json。
// JSON文件的擴展名是.json。

// JSON定義了兩種結構：
// 字符串在雙引號中，數字，對象，數組和布爾值和null都是合法的JSON值。
// JSON可以表示四種基本類型（字符串，數字，對象，數組）。
//範例
json1 = {
    name:"John", 
    age:30, 
    address: {"Home":"New York","Work":"Taipei"}, 
    married:true,
    children:["Alice","Bob"]
    }; // 定義JSON物件
console.log(json1);

// JSON物件的方法
// 1. JSON.parse() - 將JSON字串轉換為JavaScript物件
// 範例: 將JSON字串轉換為JavaScript物件
const jsonStr = '{"name":"Alice","age":25}';
const person = JSON.parse(jsonStr);
console.log(person); // { name: 'Alice', age: 25 }

// 2. JSON.stringify() - 將JavaScript物件轉換為JSON字串
// 範例: 將JavaScript物件轉換為JSON字串
const person1 = { name: 'Alice', age: 25 };
const jsonStr1 = JSON.stringify(person1);
console.log(jsonStr1); // {"name":"Alice","age":25}

// 3. JSON.parse()與JSON.stringify()的應用
// 範例: 將JSON字串轉換為JavaScript物件, 修改物件的屬性, 再將物件轉換為JSON字串
const jsonStr2 = '{"name":"Alice","age":25}';
const person2 = JSON.parse(jsonStr2);
person2.age = 30;
const jsonStr3 = JSON.stringify(person2);
console.log(jsonStr3); // {"name":"Alice","age":30}

// 4. JSON物件的屬性存取
// 範例: JSON物件的屬性存取
const person3 = {
    name: 'Alice',
    age: 25,
    address: {
      home: 'New York',
      work: 'Taipei'
    }
  };
  console.log(person3.address.home); // New York ,讀取物件的屬性
//設定物件的屬性
person3.address.home = 'Tokyo';
console.log(person3.address.home); // Tokyo

// 4. JSON物件的應用技巧
// 範例: JSON物件的應用技巧
const person4 = {
    name: 'Alice',
    age: 25,
    address: {
      home: 'New York',
      work: 'Taipei'
    }
  };
  const { name, age, address } = person4;
  console.log(name); // Alice
  console.log(age); // 25
  console.log(address.home); // New York

// 10. JSON物件的應用注意事項




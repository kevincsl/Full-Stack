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

// 5. JSON物件的應用技巧
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

// 6. 讀取與寫入JSON檔案
// 寫入JSON檔案
// 範例: 寫入JSON檔案
const fs1 = require('fs');
const person6 = {
    name: 'Alice',
    age: 25
  };
  const jsonStr4 = JSON.stringify(person6);
  fs1.writeFileSync('data.json', jsonStr4, 'utf8'); // 寫入JSON檔案, 並指定編碼格式
    console.log('Data written to file!');

// 範例: 讀取JSON檔案轉成JSON物件
const fs = require('fs');
const data = fs.readFileSync('data.json', 'utf8'); // 讀取JSON檔案, 並指定編碼格式
const person5 = JSON.parse(data);
console.log(person5);

// 7. 使用JSON Server
// JSON Server是一個Node.js模組，用於快速構建REST API服務器。
// JSON Server基於Express.js，並提供了一個簡單的命令行界面，用於設置REST API端點。
// JSON Server可以從JSON文件，JavaScript物件或JSON Server路由文件創建REST API服務器。
// 範例: 使用JSON Server
// 安裝JSON Server
// npm install -g json-server
// 創建JSON文件
// 創建data.json文件，並添加以下內容：
// {
//     "users": [
//       { "id": 1, "name": "Alice" },
//       { "id": 2, "name": "Bob" }
//     ]
//   }
// 啟動JSON Server
// json-server --watch data.json
// 訪問API端點
// http://localhost:3000/users

// 8. 使用JSON Web Token (JWT)
// JSON Web Token (JWT)是一種開放標準（RFC 7519），用於在網絡應用程序之間傳輸信息。
// JWT由三部分組成：Header、Payload和Signature。
// JWT通常用於驗證用戶身份和創建安全的API端點。
// 範例: 使用JSON Web Token (JWT)
// 安裝jsonwebtoken模組
// npm install jsonwebtoken
// 創建JWT
const jwt = require('jsonwebtoken');
const secret= 'secret';
const token = jwt.sign({ id: 1 }, secret);
console.log(token);
// 驗證JWT
const decoded = jwt.verify(token, secret);
console.log(decoded); // { id: 1 }
// 驗證JWT
const invalid = jwt.verify(token, 'invalid');
console.log(invalid); // JsonWebTokenError: invalid signature
// 生成JWT
const token1 = jwt.sign({ id: 1 }, secret, { expiresIn: '1h' });
console.log(token1);
// 驗證JWT
const decoded1 = jwt.verify(token1, secret);
console.log(decoded1); // { id: 1 }
// 驗證JWT
const expired = jwt.verify(token1, secret);
console.log(expired); // TokenExpiredError: jwt expired


// 9. 使用JSON Schema
// JSON Schema是一種用於描述JSON數據格式的語言。
// JSON Schema定義了數據類型，格式，屬性等約束。
// JSON Schema通常用於驗證JSON數據的有效性。
// 範例: 使用JSON Schema
// 安裝ajv模組
// npm install ajv
// 創建JSON Schema
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' }
  },
  required: ['name', 'age']
};
const validate = ajv.compile(schema);
// 驗證JSON數據
const data1 = { name: 'Alice', age: 25 };
const valid = validate(data1);
console.log(valid); // true
// 驗證JSON數據
const data2 = { name: 'Alice' };
const valid1 = validate(data2);
console.log(valid1); // false

// 10. 使用JSON Pointer
// JSON Pointer是一種用於定位JSON數據的標準。
// JSON Pointer使用URI片段語法來定位JSON數據的特定部分。
// JSON Pointer通常用於訪問JSON數據的特定屬性。
// 範例: 使用JSON Pointer
// 安裝jsonpointer模組
// npm install jsonpointer
// 使用JSON Pointer
const pointer = require('jsonpointer');
const data3 = { name: 'Alice', age: 25 };
const value = pointer.get(data3, '/name');
console.log(value); // Alice
// 使用JSON Pointer
pointer.set(data3, '/name', 'Bob');
console.log(data3.name); // Bob

// 11. 使用JSON Patch
// JSON Patch是一種用於修改JSON數據的標準。
// JSON Patch使用JSON數組表示要對JSON數據進行的修改操作。
// JSON Patch通常用於構建REST API端點的更新功能。
// 範例: 使用JSON Patch
// 安裝jsonpatch模組
// npm install jsonpatch
// 使用JSON Patch
const patch = require('jsonpatch');
const data4 = { name: 'Alice', age: 25 };
const patches = [
  { op: 'replace', path: '/name', value: 'Bob' }
];
const result = patch.applyPatch(data4, patches).newDocument;
console.log(result.name); // Bob

// 12. 使用JSON Merge Patch
// JSON Merge Patch是一種用於合併JSON數據的標準。
// JSON Merge Patch使用JSON對象表示要合併的數據。
// JSON Merge Patch通常用於構建REST API端點的更新功能。
// 範例: 使用JSON Merge Patch
// 安裝json-merge-patch模組
// npm install json-merge-patch
// 使用JSON Merge Patch
const mergePatch = require('json-merge-patch');
const data5 = { name: 'Alice', age: 25 };
const patch1 = { name: 'Bob' };
const result1 = mergePatch.apply(data5, patch1);
console.log(result1.name); // Bob


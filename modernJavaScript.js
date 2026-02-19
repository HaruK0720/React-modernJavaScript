// === const, let での変数宣言 === 

// 例：letによる変数の上書き例
let val2 = "let変数";
console.log(val2); // let変数

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2); // let変数を上書き


// 例：再宣言の実行
let val2 = "let変数";
console.log(val2); // let変数

// letは再宣言不可能
let val2 = "let変数を再宣言"; // エラー: Identifier 'val2' has already been declared


// 例：constで定義した変数の上書き
const val3 = "const変数";
console.log(val3); // const変数

// const変数は上書き不可能
val3 = "const変数を上書き"; // エラー: Assignment to constant variable.  or  val3 is read-only


// 例：constでの再宣言
const val3 = "const変数";
console.log(val3); // const変数

// const変数は再宣言不可能
const val3 = "const変数を再宣言"; // エラー: Identifier 'val2' has already been declared


// 例：オブジェクトのプロパティ値を変更、追加する例
// オブジェクトを定義
const obj1 = {
  name: "主田",
  age: 24,
};
console.log(obj1); // { name: "主田", age: 24 }

// プロパティ値を変更
obj1.name = "Nushida";
console.log(obj1); // { name: "Nushida", age: 24 }

// プロパティを追加
obj1.address = "Tokyo";
console.log(obj1); // { name: "Nushida", age: 24, address: "Tokyo" }


// 例：配列の値を変更、追加する例
// 配列を定義
const arr1 = ["dog", "cat"];
console.log(arr1); // ["dog", "cat"]

// 1つ目の値を変更
arr1[0] = "bird";
console.log(arr1); // ["bird", "cat"]

// 値を追加
arr1.push("monkey");
console.log(arr1); // ["bird", "cat", #monkey"]


// ほとんどの場合で const を使い、Stateで管理せず処理の中で値を上書きしていくような変数でのみ let を使う流れが一般的。



// === テンプレート文字列 ===

// 例：従来の文字列と変数の結合方法
// 名前を格納した変数
const name = "主田";

// 年齢を格納した変数
const age = 24;

// 私の名前は主田です。年齢は24歳です。と表示したい場合
const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";

console.log(message); // 私の名前は主田です。年齢は24歳です。


// 例：テンプレート文字列の利用
// 名前を格納した変数
const name = "主田";

// 年齢を格納した変数
const age = 24;

// 私の名前は主田です。年齢は24歳です。と表示したい場合
const message = `私の名前は${name}です。年齢は${age}歳です。`;

console.log(message); // 私の名前は主田です。年齢は24歳です。


// 例：関数の呼び出しと計算の実行
// こんにちは！と返すだけの関数
function sayHello() {
  return "こんにちは！";
};

// 月の数字を格納した変数
const month = 1;

// テンプレート文字列の中で関数の呼び出しと掛け算を実行
const message = `皆さん${sayHello()}今日から${month * 3}月です。`;

console.log(message); // 皆さんこんにちは！今日から3月です。



// === アロー関数 () => {} ===


























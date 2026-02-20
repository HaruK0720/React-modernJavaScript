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

// 例：従来の関数（使用例１）
// 従来の関数を定義
function func1(value) {
  return value;
}

// 実行した結果を出力
console.log(func1("func1です")); // func1です


// 例：従来の関数（使用例２）
// 関数を定義して変数に格納
const func1 = function (value) {
  return value;
}

// 実行した結果を出力
console.log(func1("func1です")); // func1です


// 例：アロー関数
// アロー関数を定義
const func2 = (value) => {
  return value;
}

// 実行した結果を出力
console.log(func2("func2です")); // func2です


// 例：アロー関数の省略記法
// アロー関数を定義 ※引数が1つなのでカッコを省略
const func2 = value => {
  return value;
}

// 実行した結果を出力
console.log(func2("func2です")); // func2です


// 例：引数が2つ以上の場合
// 引数が2つ以上だとエラー
const func3 = value1, value2 => {
  return value1 + value2;
}

// 2つ以上の場合はカッコで囲む
const func3 = (value1, value2) => {
  return value1 + value2;
}


// 例：returnの省略
// 処理を単一行で返すので {} を省略
const func4 = (num1, num2) => num1 + num2;

//実行した結果を出力
console.log(func4(10, 20)); // 30


// 例：誤ったreturnの書る役
// {}で囲ったのにreturnを書いていない
const func4 = (num1, num2) => {
  num1 + num2
}

//実行した結果を出力（何も返却されない）
console.log(func4(10, 20)); // undefined


// 例：()を用いて1行としてまとめる
// カッコで囲んでまとめて省略して返却
const func5 = (val1, val2) => (
  {
    name: val1,
    age: val2,
  }
)

// 実行した結果を出力
console.log(func5("主田", 24)); // { name: "主田", age: 24 }



// === 分割代入 {} [] ===

// 例：分割代入を使用しない文字列を出力
const myProfile = {
  name: "主田",
  age: 24,
};

const message = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message); // 私の名前は主田です。年齢は24歳です。


// 例：分割代入を使用
const myProfile = {
  name: "主田",
  age: 24,
};

// オブジェクトの分割代入
const { name, age } = myProfile; 

const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message); // 私の名前は主田です。年齢は24歳です。


// 例：一部のみ取り出す
// 一部のみ取り出す
const { age } = myProfile;

//　例：順番を変えて取り出す
// どんな順番でも大丈夫
const { age, name } = myProfile;


// 例：抽出したプロパティに別名をつける
const myProfile = {
  name: "主田",
  age: 24,
};

// コロンで別の変数名を使用
const { name: newName, age: newAge } = myProfile;

const message = `私の名前は${newName}です。年齢は${newAge}歳です。`;
console.log(message); // 私の名前は主田です。年齢は24歳です。


// 例：配列のインデックスを指定して代入を行う
const myProfile = ["主田", 24];

const message = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message); // 私の名前は主田です。年齢は24歳です。


// 例：配列に対して分割代入を行う
const myProfile = ["主田", 24];

// 配列の分割代入
const [name, age] = myProfile;

const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message); // 私の名前は主田です。年齢は24歳です。


// 例：配列に必要な要素のみ取り出す
// 1つ目のみ必要な場合
const [name] = myProfile;



// === デフォルト値 = ===




































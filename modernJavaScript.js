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

// 例：メッセージを出力する関数
const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
sayHello("主田"); // こんにちは！主田さん！


// 例：実行時に引数をを渡さなかった場合
const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
sayHello(); // こんにちは！undefinedさん！


// 例：デフォルト値の設定
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello(); // こんにちは！ゲストさん！
sayHello("主田"); // こんにちは！主田さん！


// 例：存在しないプロパティを出力
// nameを削除
const myProfile = {
  age: 24,
}

// 存在しないname
const { name } = myProfile;

const message = `こんにちは！${name}さん！`;
console.log(message); // こんにちは！undefinedさん！


// 例：分割代入時にデフォルト値を設定
const myProfile = {
  age: 24,
}

const { name = "ゲスト" } = myProfile;

const message = `こんにちは！${name}さん！`;
console.log(message); // こんにちは！ゲストさん！



// === スプレッド構文 ... ===

// 例：配列
const arr1 = [1, 2];
console.log(arr1); // [1, 2]


// 書式：スプレッド構文
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2


// 例：一般的な関数とスプレッド構文
const arr1 = [1, 2];

const summaryFunc = (num1, num2) => console.log(num1 + num2);

// 普通に配列の値を渡す場合
summaryFunc(arr1[0], arr1[1]); // 3

// スプレッド構文を用いた方法
summaryFunc(...arr1); // 3


// 例：要素をまとめる
const arr2 = [1, 2, 3, 4, 5];

// 分割代入時に残りを「まとめる」
const [num1, num2, ...arr3] = arr2;

console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [3, 4, 5]


// 例：2つの配列
const arr4 = [10, 20];
const arr5 = [30, 40];


// 例：スプレッド構文を用いて新たな配列を生成
const arr4 = [10, 20];
const arr5 = [30, 40];

// スプレッド構文でコピー
const arr6 = [...arr4];

console.log(arr4); // [10, 20]
console.log(arr6); // [10, 20]


// 例：2つの配列の結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// スプレッド構文で結合
const arr7 = [...arr4, ...arr5];

console.log(arr7); // [10, 20, 30, 40]


// 例：複数のオブジェクトの結合
const obj4 = { val1: 10, val2: 20 };
const obj5 = { val3: 30, val4: 40 };

// スプレッド構文でコピー
const obj6 = { ...obj4 };
// スプレッド構文で結合
const obj7 = { ...obj4, ...obj5 };

console.log(obj6); // {val1: 10, val2: 20}
console.log(obj7); // {val1: 10, val2: 20, val3: 30, val4: 40}


// 例：=(イコール)によるコピー
const arr4 = [10, 20];

// = でコピー
const arr8 = arr4;

console.log(arr8); // [10, 20]


// 例：コピーに起因する予期せぬ挙動
const arr4 = [10, 20];

// = でコピー
const arr8 = arr4;

// arr8の最初の要素を100に書き換える
arr8[0] = 100;

console.log(arr4); // [100, 20]
console.log(arr8); // [100, 20]


// 例：スプレッド構文を用いたコピー
const arr4 = [10, 20];

// スプレッド構文でコピー
const arr8 = [...arr4];

// arr8の最初の要素を書き換える
arr8[0] = 100;

console.log(arr4); // [10, 20]
console.log(arr8); // [100, 20]



// === オブジェクトの省略記法 ===

// 例：プロパティ名と変数名が同一の場合１
const name = "主田";
const age = 24;

// ユーザーオブジェクトを定義（プロパティ名は name と age）
const user = {
  name: name,
  age: age,
}

console.log(user); // {name: '主田', age: 24}


// 例：プロパティ名と変数名が同一の場合２
const name = "主田";
const age = 24;

// 省略記法
const user = {
  name,
  age,
}

console.log(user); // {name: '主田', age: 24}



// === map, filter === 






















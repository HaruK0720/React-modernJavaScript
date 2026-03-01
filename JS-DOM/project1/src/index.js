// --- id指定で要素を取得 ---

// getElementByIdを使う
const title1 = document.getElementById("title");
console.log(title1);
// <h1 id="title">Hello World!!</h1>

// querySelectorを使う
const title2 = document.querySelector("#title");
console.log(title2);
// <h1 id="title">Hello World!!</h1>


// --- クラス名でElementを取得 ---

// getElementsByClassNameを使う
const containers = document.getElementsByClassName("container");
console.log(containers);
// HTMLCollection(2) [div.container, div.container]


// --- querySelectorによるElementの取得

// querySelectorを使う
const container = document.querySelector(".container");
console.log(container);
// 一致した最初の要素を返す
// <div class="container">
//     <p>エリア1です</p>
// </div>


// --- querySelectorAllによるElementの取得

// querySelectorAllを使う
const containers2 = document.querySelectorAll(".container");
console.log(containers2);
// NodeList(2) [div.container, div.container]
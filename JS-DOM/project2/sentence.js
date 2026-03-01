// === DOMの作成 ===

// --- divの生成 ---
const divEl = document.createElement("div");
console.log(divEl);
// <div></div>


// --- HTMLUnknownElementの生成 ---
const nushidaEl = document.createElement("nushida");
console.log(nushidaEl);
// <nushida></nushida>



// === DOMの追加 ===

// --- div配下にpタグを追加 ---
// divタグの生成
const divEl2 = document.createElement("div");

// pタグの生成
const pEl = document.createElement("p");

// divタグ配下にpタグを追加
divEl2.appendChild(pEl);
console.log(divEl);
// <div>
//   <p></p>
// </div>


// --- div配下にpタグとh2タグを追加 ---
const divEl3 = document.createElement("div");

// pタグの生成
const pEl1 = document.createElement("p");

// h2タグの生成
const h2El = document.createElement("h2");

// divタグ配下にpタグを追加
divEl3.appendChild(pEl1);
// divタグ配下にh2タグを追加
divEl3.appendChild(h2El);

console.log(divEl3);
// <div>
//   <p></p>
//   <h2></h2>
// </div>


// --- div配下の先頭にpタグとh2タグを追加 ---
const divEl4 = document.createElement("div");

// pタグの生成
const pEl2 = document.createElement("p");

// h2タグの生成
const h2El1 = document.createElement("h2");

// divタグ配下にpタグを追加（追加）
divEl4.prepend(pEl2);
// divタグ配下にh2タグを追加（追加）
divEl4.prepend(h2El1);

console.log(divEl4)
// <div>
//   <h2></h2>
//   <p></p>
// </div>



// === DOMの削除 ===

// --- h1タグを削除 ---
// h1タグの取得
const h1El = document.getElementById("title");

// bodyタグの取得
const bodyEl = document.querySelector("body");

// bodyタグ配下から削除
bodyEl.removeChild(h1El);


// --- body配下を全削除 ---
// bodyタグの取得
const bodyEl1 = document.querySelector("body");

// bodyタグ配下から削除
bodyEl1.textContent = null;
// 子要素を全て削除したいときはtextContentに対してnullを設定してあげるといい
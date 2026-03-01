// buttonタグの生成
const buttonEl = document.createElement("button");
// ボタンのラベルを設定
buttonEl.textContent = "ボタン";

// エリア1のdivタグを取得
const divEl = document.querySelector(".container");

// divタグ配下にbuttonタグを追加
divEl.appendChild(buttonEl);
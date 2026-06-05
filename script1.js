//変数
const str = "hoge";  //1

const num = 69;  //2

const isFalse = false;  //3

let value;  //4

const empty = null;   //5

const lname = ["田中", "佐藤", "久保田", "鈴木", "河本",];  //6

const user = {
  id: 1,
  name: "yourName",
  age: 20
};  //7

console.log(str);
console.log(num);
console.log(isFalse);
console.log(value);
console.log(empty);
console.log(lname);  //8

//関数

function myFunction() {
}  //1

const myArrowFunstion = () => {
}  //2

function showValue(value) {
  console.log(value);
}  //3

function add(a, b) {
  return a + b;
}  //4

function joinText(str1, str2) {
  return str1 + str2;
}  //5

//DOM操作

// 1. IDで取得
const container = document.getElementById("container");

// 2. セレクターで取得
const text = document.querySelector(".text");

// 3. 新しいpタグ作成
const newP = document.createElement("p");
newP.textContent = "追加された要素";

// 4. 子要素として追加
container.appendChild(newP);

//イベントハンドリング

// 1. ボタンクリックで "click"
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  console.log("click");
});

// 2. スクロールで "scroll"
window.addEventListener("scroll", () => {
  console.log("scroll");
});

// 3. クリックで子要素追加
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");

addBtn.addEventListener("click", () => {
  const newP = document.createElement("p");
  newP.textContent = "子要素が追加されました！";
  container.appendChild(newP);
});
// 全モルフを格納
let molfArray = [
  "ハイイエロー",
  "スーパーマックスノー",
  "エメリン",
  "トレンパーアルビノ",
  "ハイポタンジェリン",
  "ブレイジングブリザード",
  "レモンフロスト",
  "バンディット",
  "ギャラクシー",
  "ブラックナイト"
];

// 問題番号をインクリメントする関数を作る。
function increment() {
  questionNumber++;
  questionNumberElement.innerText = questionNumber;
}

// 問題文をランダムに作成する関数を作る。
function molfQuestion() {
  imageNumber = Math.floor(Math.random() * molfArray.length);
  molfQuestionName = molfArray[imageNumber];
  questionElement.innerText = molfQuestionName;
}

// 選択肢がランダムで2枚表示され、正誤判定する関数を作る。
function molfAnswer() {
  // 正解のモルフを用意する。
  imageMolf = '<img src="image/' + molfQuestionName + '.jpg">';
  // 不正解のモルフを用意する。
  do {
    i = Math.floor(Math.random() * molfArray.length);
  } while (i === imageNumber);
  notImageNumber = i;
  notImageMolf = '<img src="image/' + molfArray[notImageNumber] + '.jpg">';
  // 正解と不正解を格納した配列を用意する。
  optionArray = [];
  optionArray[0] = imageMolf;
  optionArray[1] = notImageMolf;
  // 正解と不正解をランダムにエレメントに格納する。
  c = Math.floor(Math.random() * 2);
  do {
    d = Math.floor(Math.random() * 2);
  } while (c === d);
  a = c;
  b = d;
  imageElement.innerHTML = optionArray[a];
  notImageElement.innerHTML = optionArray[b];
  // 左右の画像名を代入
  optionA = optionArray[a]
    .replace('<img src="image/', "")
    .replace('.jpg">', "");
  optionB = optionArray[b]
    .replace('<img src="image/', "")
    .replace('.jpg">', "");
}

// 何問目かを表示する。

let questionNumber = 1;
let questionNumberElement = document.getElementById("question-number");
questionNumberElement.innerText = questionNumber;

// 問題文をランダムに作成。

let imageNumber = Math.floor(Math.random() * molfArray.length);
let molfQuestionName = molfArray[imageNumber];
let questionElement = document.getElementById("question-molf-name");
questionElement.innerText = molfQuestionName;

// 正解のモルフを用意する。

let imageElement = document.getElementById("left");
let imageMolf = '<img src="image/' + molfQuestionName + '.jpg">';
// imageElement.innerHTML = imageMolf;

// 不正解のモルフを用意する。

do {
  i = Math.floor(Math.random() * molfArray.length);
} while (i === imageNumber);
let notImageNumber = i;
let notImageElement = document.getElementById("right");
let notImageMolf = '<img src="image/' + molfArray[notImageNumber] + '.jpg">';
// notImageElement.innerHTML = notImageMolf;

// 正解と不正解を格納した配列を用意する。

let optionArray = [];
optionArray[0] = imageMolf;
optionArray[1] = notImageMolf;

// 正解と不正解をランダムにエレメントに格納する。

c = Math.floor(Math.random() * 2);
do {
  d = Math.floor(Math.random() * 2);
} while (c === d);

a = c;
b = d;

imageElement.innerHTML = optionArray[a];
notImageElement.innerHTML = optionArray[b];

// 左右の画像名を代入

let optionA = optionArray[a]
  .replace('<img src="image/', "")
  .replace('.jpg">', "");
let optionB = optionArray[b]
  .replace('<img src="image/', "")
  .replace('.jpg">', "");

// 左の画像をクリックして、正誤ごとに処理を行う。

function buttonClickLeft() {
  if (optionA === molfQuestionName) {
    console.log("正解");
    // 正解と表示される。
    let marubatsuElement = document.getElementById("marubatsu");
    marubatsuElement.innerText = "正解だよん";
    // 正解表示のN秒後、正解という表示が非表示になる。
    value = "";
    setTimeout(() => {
      marubatsuElement.innerText = value;
    }, 300);
    // 正解表示のN秒後、問題番号がインクリメントされる。
    setTimeout(increment, 300);
    //  正解表示のN秒後、問題名がランダムに表示される関数を表示。
    setTimeout(molfQuestion, 300);
    //  正解表示の2秒後、選択肢がランダムで2枚表示され、正誤判定する関数を利用。
    setTimeout(molfAnswer, 300);
    //  正解表示のN秒後、タイマーがリセットされる。
    setTimeout(() => {
      originalTime = 999;
      timerElement.innerText = originalTime;
    }, 300);
  } else {
    console.log("不正解");
    // 不正解と表示される。
    let marubatsuElement = document.getElementById("marubatsu");
    marubatsuElement.innerText = "間違いじゃぼけ";
    // 得点を用意する。
    let scr = questionNumber - 1;
    console.log(scr);
    window.localStorage.setItem("result", scr);
    // 不正解表示のN秒後、ページが遷移される。
    setTimeout(() => {
      window.location.href = "./consequence.html";
    }, 300);
  }
}

// 右をクリックして、正解の場合、正解とログする。

function buttonClickRight() {
  if (optionB === molfQuestionName) {
    console.log("正解");
    // 正解と表示される。
    let marubatsuElement = document.getElementById("marubatsu");
    marubatsuElement.innerText = "正解だよん";
    // 正解表示のN秒後、正解という表示が非表示になる。
    value = "";
    setTimeout(function () {
      marubatsuElement.innerText = value;
    }, 300);
    // 正解表示の2秒後、問題番号がインクリメントされる。
    setTimeout(increment, 300);
    //  正解表示の2秒後、問題名がランダムに表示される関数を表示。
    setTimeout(molfQuestion, 300);
    //  正解表示の2秒後、選択肢がランダムで2枚表示され、正誤判定する関数を利用。
    setTimeout(molfAnswer, 300);
    //  正解表示のN秒後、タイマーがリセットされる。
    setTimeout(() => {
      originalTime = 999;
      timerElement.innerText = originalTime;
    }, 300);
  } else {
    console.log("不正解");
    // 不正解と表示される。
    let marubatsuElement = document.getElementById("marubatsu");
    marubatsuElement.innerText = "間違いじゃぼけ";
    // 得点を用意する。
    let scr = questionNumber - 1;
    console.log(scr);
    window.localStorage.setItem("result", scr);
    // 不正解表示のN秒後、ページが遷移される。
    setTimeout(() => {
      window.location.href = "./consequence.html";
    }, 300);
  }
}

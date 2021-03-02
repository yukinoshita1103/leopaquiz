let originalTime = 5;
// アロー関数で記載。
let countDown = () => {
  originalTime--;
};
// 初期値を表示。
let timerElement = document.getElementById("timer-text");
timerElement.innerText = originalTime;

// 1秒ごとに、1減らして、表示する。タイムアウトで画面遷移。
let id = setInterval(function () {
  countDown();
  timerElement.innerText = originalTime;
  if (originalTime < 1) {
    clearInterval(id);
    window.location.href = "./consequence.html";
  }
}, 1000);

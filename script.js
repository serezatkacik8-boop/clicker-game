let score = 0;

let power = 1;

let autoClickers = 0;

const scoreEl = document.getElementById('score');

const powerEl = document.getElementById('power');

const clickBtn = document.getElementById('clickBtn');

const upgradeBtn = document.getElementById('upgradeBtn');
const autoBtn = document.getElementById('autoBtn');

const messageEl = document.getElementById('message');

function updateScreen() {
  scoreEl.textContent = score;
  powerEl.textContent = power;
}
function showMessage(text){
  messageEl.textContent = text;
}

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
function updateScreen(){
  scoreEl.textContent = score;
}
function updateScreen(){
  scoreEl.textContent = score;
  powerEl.textContent = power;
}
function showMessage(text){
  messageEl.textContent = text;
}
function saveGame() {
  localStorage.setItem('score', score);
  localStorage.setItem('power', power);
  localStorage.setItem('autoClickers', autoClickers);
}
function loadGame() {
  const savedScore = localStorage.getItem('score');
  const savedPover = localStorage.getItem('power');
  const savedAutoClickers = localStorage.getItem('autoClickers');
  if(savedScore !== null){
    score = Number(savedScore);
  }
    if (savedPower !== null) {
    power = Number(savedPower);
  }

  if (savedAutoClickers !== null) {
    autoClickers = Number(savedAutoClickers);
  }
}
clickBtn.addEventListener('click', () => {
  score += power;
  updateScreen();
});
upgradeBtn.addEventListener('click', () => {
  if (score >= 10){
    score -= 10;
    power += 1;
    updateScreen();
    showMessage('Клик улучшен!');
  }
  else{
    showMessage('Не хватает очков');
  }
});
autoBtn.addEventListener('click', () => {
  if( score >= 50){
    score -=50;
    autoClickers += 1;
    updateScreen();
    showMessage('Авто-кликер куплен!');
  }
  else{
    showMessage('Не хватает очков');
  }
});
setInterval(() => {

  if (autoClickers > 0) {

    for (let i = 0; i < autoClickers; i++) {
      clickBtn.click();
    }

  }

}, 1000);
loadGame();
updateScreen();
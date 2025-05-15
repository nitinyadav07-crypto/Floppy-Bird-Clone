let gameContainer = document.getElementById('game');
let playBtn = document.getElementById('playBtn');

const clickSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_0cfc16e90f.mp3');
const winSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_13ff962637.mp3');

playBtn.addEventListener('click', () => {
  clickSound.play();
  startGame();
});

function startGame() {
  gameContainer.innerHTML = '<p style="animation: pop 0.4s ease-in-out;">Let\'s play!</p>';
  setTimeout(() => {
    winSound.play();
    gameContainer.innerHTML = '<p style="animation: pop 0.4s ease-in-out;">You Win!</p>';
  }, 2000);
}

// Add animation for pop effect
const style = document.createElement('style');
style.innerHTML = `
  @keyframes pop {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(style);

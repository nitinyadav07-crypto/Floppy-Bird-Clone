const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let birdY = 200;
let birdVelocity = 0;
const gravity = 0.5;
const flapPower = -8;

let pipeX = 400;
let pipeGap = 120;
let pipeTop = Math.random() * 200 + 50;

let score = 0;
let gameOver = false;

document.addEventListener("keydown", flap);
canvas.addEventListener("click", flap);

function flap() {
  if (!gameOver) {
    birdVelocity = flapPower;
  } else {
    location.reload(); // Restart game
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Bird
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(100, birdY, 15, 0, Math.PI * 2);
  ctx.fill();

  // Pipes
  ctx.fillStyle = "green";
  ctx.fillRect(pipeX, 0, 50, pipeTop); // top pipe
  ctx.fillRect(pipeX, pipeTop + pipeGap, 50, canvas.height); // bottom pipe

  // Score
  ctx.fillStyle = "white";
  ctx.font = "24px Arial";
  ctx.fillText(`Score: ${score}`, 10, 30);
}

function update() {
  if (gameOver) return;

  birdVelocity += gravity;
  birdY += birdVelocity;

  pipeX -= 3;

  // Pipe reset
  if (pipeX < -50) {
    pipeX = 400;
    pipeTop = Math.random() * 200 + 50;
    score++;
  }

  // Collision detection
  if (
    birdY < 0 || birdY > canvas.height ||
    (pipeX < 130 && pipeX > 70 && (birdY < pipeTop || birdY > pipeTop + pipeGap))
  ) {
    gameOver = true;
    ctx.fillStyle = "red";
    ctx.font = "36px Arial";
    ctx.fillText("Game Over", 100, 300);
    ctx.font = "20px Arial";
    ctx.fillText("Press any key or click to restart", 60, 340);
    return;
  }

  draw();
  requestAnimationFrame(update);
}

update();

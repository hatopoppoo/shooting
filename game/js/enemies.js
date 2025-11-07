export const enemies = [];
const SIZE = 40;
const enemyImage = new Image();
enemyImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwf_Xp6Betg2IhK6EqdWnfa4l6wV7rniHFbBE7rMTnqE28eaEmUP6ZgZZusF5TxH_R-8r9ENcekbLJGgNpy4XoZzeaV6nGNeQz5V0pKo105ReDxbyLnIxUyODtmqZvGaRZmWmESTGcDXM/s170/monster06.png"

function pushEnemies(canvas) {
  const w = SIZE;
  const h = SIZE;
  const x = Math.random() * (canvas.width - w);
  const y = 0;
  const vy = 5

  enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
 if (enemies.length < 5) {
    pushEnemies(canvas);
 }
}

export function updateEnemies(canvas) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    e.y += e.vy;
    if (e.y > canvas.height) {
      enemies.splice(i, 1);
    }
  }
}

export function drawEnemies(ctx) {
  ctx.fillStyle = "crimson";
  for (const e of enemies) {
    ctx.drawImage(enemyImage, e.x, e.y, e.width, e.height);
  }
}

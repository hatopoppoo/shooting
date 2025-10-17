export const enemies = [];
const SIZE = 26;

function pushEnemy(canvas){
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = -h;
    const vy = 5;

    enemies.push({ x, y, width: w, height: h, vy});
}

export function spawnEnemy(canvas){
    if(enemies.lenght < 5){
        pushEnemy(canvas);
    }
}


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const box = 20;
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};

let score = 0;
let d;

document.addEventListener('keydown', direction);

function direction(event) {
    if (event.keyCode == 37 && d != "RIGHT") {
        d = "LEFT";
    } else if (event.keyCode == 38 && d != "DOWN") {
        d = "UP";
    } else if (event.keyCode == 39 && d != "LEFT") {
        d = "RIGHT";
    } else if (event.keyCode == 40 && d != "UP") {
        d = "DOWN";
    }
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

let game;
const startButton = document.getElementById('startButton');
const settingsButton = document.getElementById('settingsButton');
const uploadInput = document.getElementById('upload');
let headImage = null;

startButton.addEventListener('click', startGame);
settingsButton.addEventListener('click', () => uploadInput.click());
uploadInput.addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                headImage = img;
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function startGame() {
    startButton.style.display = 'none';
    clearInterval(game);
    snake = [];
    snake[0] = { x: 9 * box, y: 10 * box };
    score = 0;
    d = null;
    food = {
        x: Math.floor(Math.random() * 19 + 1) * box,
        y: Math.floor(Math.random() * 19 + 1) * box
    };
    game = setInterval(draw, 300);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        if (i == 0 && headImage) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(snake[i].x + box / 2, snake[i].y + box / 2, box / 2, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(headImage, snake[i].x, snake[i].y, box, box);
            ctx.restore();
        } else if (i == 0) {
            ctx.fillStyle = "#1976D2";
            ctx.beginPath();
            ctx.arc(snake[i].x + box / 2, snake[i].y + box / 2, box / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.strokeStyle = "#0D47A1";
            ctx.stroke();
        } else {
            ctx.fillStyle = "#2196F3";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            ctx.strokeStyle = "#0D47A1";
            ctx.strokeRect(snake[i].x, snake[i].y, box, box);
        }
    }

    ctx.fillStyle = "#FF5252";
    ctx.beginPath();
    ctx.arc(food.x + box / 2, food.y + box / 2, box / 2, 0, 2 * Math.PI);
    ctx.fill();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        startButton.style.display = 'block';
    }

    snake.unshift(newHead);

    ctx.fillStyle = "#333";
    ctx.font = "20px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    ctx.fillText("Score: " + score, box, 1.5 * box);
} 
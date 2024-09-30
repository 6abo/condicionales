let ballX, ballY;  // Coordenadas de la pelota
let ballRadius = 40;  // Radio de la pelota
let ballSpeed = 8;  // Velocidad de movimiento
let bgColor;  // Color de fondo

// Función de configuración inicial de p5.js
function setup() {
    createCanvas(windowWidth, windowHeight); // Crear un lienzo de 500x500 píxeles
    frameRate(60);
    ballX = width / 2; // Posición inicial de la pelota en el centro (eje X)
    ballY = height / 2; // Posición inicial de la pelota en el centro (eje Y)
    bgColor = color(0); // Fondo blanco inicial
}

// Función que se ejecuta continuamente para dibujar en el lienzo
function draw() {
    background(bgColor); // Usar el color actual de fondo
    drawBall(); // Dibujar la pelota
    moveBall(); // Controlar el movimiento de la pelota con las teclas
    checkCollision(); // Verificar colisiones con los bordes
}

// Función para dibujar la pelota
function drawBall() {
    fill(255, 165, 0); // Color naranja de la pelota
    stroke(0); // Borde negro
    strokeWeight(2);
    ellipse(ballX, ballY, ballRadius * 2); // Dibujar una elipse (pelota)
}

// Función para mover la pelota utilizando las teclas de flecha
function moveBall() {
    if (keyIsDown(LEFT_ARROW)) {
        if (ballX - ballRadius > 0) { // Limitar movimiento al borde izquierdo
            ballX -= ballSpeed;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if (ballX + ballRadius < width) { // Limitar movimiento al borde derecho
            ballX += ballSpeed;
        }
    }
    if (keyIsDown(UP_ARROW)) {
        if (ballY - ballRadius > 0) { // Limitar movimiento al borde superior
            ballY -= ballSpeed;
        }
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (ballY + ballRadius < height) { // Limitar movimiento al borde inferior
            ballY += ballSpeed;
        }
    }
}

// Función para verificar colisiones con los bordes del canvas
function checkCollision() {
    let collided = false;

    // Colisión con el borde izquierdo o derecho
    if (ballX - ballRadius <= 0 || ballX + ballRadius >= width) {
        collided = true;
    }

    // Colisión con el borde superior o inferior
    if (ballY - ballRadius <= 0 || ballY + ballRadius >= height) {
        collided = true;
    }

    // Si la pelota ha colisionado, cambiar el color de fondo
    if (collided) {
        changeBackgroundColor();
    }
}

// Función para cambiar el color de fondo a un color aleatorio
function changeBackgroundColor() {
    bgColor = color(random(255), random(255), random(255)); // Cambiar a un color aleatorio
}


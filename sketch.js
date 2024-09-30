let ballX, ballY;  // Coordenadas de la pelota
let ballRadius = 40;  // Radio de la pelota
let ballSpeed = 8;  // Velocidad de movimiento de la pelota
let bgColor;  // Color de fondo BackgroundColor

// Función de configuración inicial de p5.js
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60); // Cuadors por segundo
    ballX = width / 2; // Posición inicial de la pelota en el centro (eje X)
    ballY = height / 2; // Posición inicial de la pelota en el centro (eje Y)
    bgColor = color(0); // Fondo negro al iniciar
}

// Función que se ejecuta continuamente para dibujar en el lienzo
function draw() {
    background(0); // Fondo blanco
    drawBall(); // Dibujar la pelota
    moveBall(); // Controlar el movimiento de la pelota con las teclas
}


function drawBall() {
    fill(255, 165, 0); // Color naranja de la pelota
    stroke(255); // borde de la pelota color
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

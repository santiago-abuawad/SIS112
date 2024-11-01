//Selecionamos el vanvas y el contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
var utilsObj = new Utils();

//Funcion para ajustar el tamaño de canvas a la ventana
function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9; //el juego esta al 90% de la pantalla del jugador
    canvas.height = window.innerHeight * 0.9;
    
    canvas.width = Math.round(canvas.width / 50) * 50;
    canvas.height = Math.round(canvas.height / 50) * 50;

    canvas.width = utilsObj.RoundTablero(canvas.width); 
    canvas.height = utilsObj.RoundTablero(canvas.height); 
    console.log('width', canvas.width)
    console.log('height', canvas.height)
}

//Llamamos a la funcion para cargar la pagina
resizeCanvas();

//Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

//Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, 'start');

//Creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank(100, 100, 'up', 3, game.ancho, game.alto);
const enemyTank1 = new EnemyTank(1200, 150, 'down', 3, game.ancho, game.alto);
const enemyTank2 = new EnemyTank(600, 700, 'down', 3, game.ancho, game.alto);
const enemyTank3 = new EnemyTank(200, 700, 'down', 3, game.ancho, game.alto);
const enemyTank4 = new EnemyTank(900, 250, 'down', 3, game.ancho, game.alto);
const enemyTank5 = new EnemyTank(1000, 500, 'down', 3, game.ancho, game.alto);




//Controles basicos para mover el tanque del jugador
window.addEventListener('keydown', function (e){
    switch(e.key) {
        case 'ArrowLeft':
            playerTank.moveLeft();
            break;
        case 'ArrowRight':
            playerTank.moveRight();
            break;
        case 'ArrowUp':
            playerTank.moveUp();
            break;
        case 'ArrowDown':
            playerTank.moveDown();
            break;
        //Las teclas de las Letras del teclado
        case 'a':
            playerTank.moveLeft();
            break;
        case 'd':
            playerTank.moveRight();
            break;
        case 'w':
            playerTank.moveUp();
            break;
        case 's':
            playerTank.moveDown();
            break;

    }
});

//Hacer el tanque enemigo random
function moveEnemyTankRandomly(enemyTank) {
    const directions = [ 'left', 'right', 'up', 'down']; //Posibles direcciones
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]; 

    //Movemos el tanque enemigo en la direccion elegida
    switch(randomDirection) {
        case 'left':
            enemyTank.moveLeft();
            break;
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;
    }
}

//Hacemos q el tanque parezca tontito y se mueva al azar
setInterval(() => {
    moveEnemyTankRandomly(enemyTank1);
    moveEnemyTankRandomly(enemyTank2);
    
}, 200);
setInterval(() => {
    moveEnemyTankRandomly(enemyTank3);
    moveEnemyTankRandomly(enemyTank4);
    moveEnemyTankRandomly(enemyTank5);
}, 250); //250 son milisegundos que va el tanque enemigo 

const escenario = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

const cellSize = 50 //Tamaño de la celda en pixeles

function drawEscenario(ctx, escenario) {
    for (let row = 0; row < escenario.length; row ++) {
        for (let col = 0; col < escenario[row].length; col ++){
            const cell = escenario [row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;

            switch(cell) {
                case 0: //espacio vacio
                    ctx.fillStyle = "black";
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1: //pared
                    ctx.fillStyle = "gray";
                   ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                   //var wall = new Image();
                   //wall.src = "./assets/pared.webp";
                   //ctx.drawImage(wall, x, y, cellSize, cellSize);
                   break;
                default:
                    break;

            }
        }
    }
}

const mapa = [
    [1, 0, 1, 0, 1],
    [1, 0, 0,0,1]
];

function DibujarCero(){
    ctx.fillStyle = "orange";
    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
}

function DibujarUno(ctx){
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
}

function DibujarMapa(ctx, mapa){
    for (let row = 0; row < mapa.length; row++) {
        for (let col = 0; col < mapa[row].length; col++) {
            const cell = mapa[row] [col];
            console.log(cell);
            
        }
    }
}



//Logica del juego(actualizacion a la pantalla)
function updateGame(){
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //drawEscenario(ctx, escenario); // Dibujamos el escenario en el canva
    DibujarMapa(ctx, mapa);

    drawEscenario(ctx, escenario); //dibujamos al escenario en el canvas
    //drawTank(playertank);
    playerTank.drawTank(ctx);
    //drawEnemyTank(ctx);
    enemyTank1.drawEnemyTank(ctx);
    enemyTank2.drawEnemyTank(ctx);
    enemyTank3.drawEnemyTank(ctx);
    enemyTank4.drawEnemyTank(ctx);
    enemyTank5.drawEnemyTank(ctx);

    //Refrescar los grafico
    requestAnimationFrame(updateGame);
}



//Inicar el juego
updateGame();
const canvas = document.getElementById('game')
const game = canvas.getContext('2d')

window.addEventListener('load', startGame)
 
function startGame() {
    let canvasSize;

    if(window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75;
    } else {
        canvasSize = window.innerHeight * 0.75;
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    const elementsSize = (canvasSize / 10) - 1 ;

    console.log({canvasSize, elementsSize});

    game.font = elementsSize + 'px Kalam';
    game.textAlign = '';

for (let i = 0; i < 10; i++) {
    game.fillText(emojis['X'], elementsSize * i, elementsSize);
}

    

    // game.fillRect(50,0,100,100)
    // // game.clearRect(50,50,100,50)
    // // game.clearRect()
    // game.font = '25px Kalam'
    // game.fillStyle = 'red';
    // game.textAlign = 'center'
    // game.fillText('Hello', 50, 50);
}

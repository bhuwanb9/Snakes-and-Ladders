export const snakesArray = [
    {
        start: 41,
        end: 5
    },
    {
        start: 82,
        end: 12
    },
    {
        start: 93,
        end: 57
    },
    {
        start: 53,
        end: 4
    },
    {
        start: 96,
        end: 68
    }
];

export const laddersArray = [
    {
        start: 80,
        end: 83
    },
    {
        start: 87,
        end: 93
    },
    {
        start: 70,
        end: 90
    },
    {
        start: 54,
        end: 69
    },
    {
        start: 28,
        end: 77
    },
    {
        start: 30,
        end: 32
    },
    {
        start: 7,
        end: 29
    },
    {
        start: 2,
        end: 23
    },
    {
        start: 22,
        end: 41
    }
];

export function generateTiles() {
    let tilesColor = ['yellow', 'red', 'blue', 'green', 'white', 'yellow', 'green', 'blue', 'white', 'red',];
    let boardTiles = [];
    let tilesRow = [];
    let count = 0;
    for (let i = 0; i < 10; i++) {
        tilesRow = [];
        for (let j = 0; j < 10; j++) {
            count++
            let random = Math.floor(Math.random() * 10);
            tilesRow.push({
                num: count,
                color: tilesColor[random]
            });
        }
        boardTiles.push(tilesRow);
    }
    return boardTiles;
}

export function calculateSnakeStyle(data) {
    let snakeLeft = 0;
    let snakeWidth = 0;
    let startTile = document.getElementById(`tile-${data.start}`).getBoundingClientRect();
    let endTile = document.getElementById(`tile-${data.end}`).getBoundingClientRect();
    let snakeLadderBoard = document.getElementById('board').getBoundingClientRect();
    let snakeTop = startTile.top - snakeLadderBoard.top;
    let snakeHeight = endTile.top - startTile.top + 60;
    if (endTile.left < startTile.left) {
        snakeLeft = endTile.left - snakeLadderBoard.left;
        snakeWidth = startTile.left - endTile.left + 60;
    } else {
        snakeLeft = startTile.left - snakeLadderBoard.left;
        snakeWidth = endTile.left - startTile.left + 60;
    }
    let tileStyles = {
        top: `${snakeTop}px`,
        left: `${snakeLeft}px`,
        height: `${snakeHeight}px`,
        width: `${snakeWidth}px`,
        backgroundImage: `url(${process.env.PUBLIC_URL + 'images/snake.png'})`
    }
    let snakePos = endTile.left < startTile.left ? 'reverse' : 'default';
    if (snakePos === 'default') tileStyles.transform = 'rotateY(180deg)';
    return tileStyles
}

export function calculateLadderStyle(data) {
    let tileStyles = {};
    let ladderLeft = 0;
    let ladderWidth = 0;
    let startTile = document.getElementById(`tile-${data.start}`).getBoundingClientRect();
    let endTile = document.getElementById(`tile-${data.end}`).getBoundingClientRect();
    let snakeLadderBoard = document.getElementById('board').getBoundingClientRect();
    let ladderTop = endTile.top - snakeLadderBoard.top;
    let ladderHeight = startTile.top - endTile.top + 60;
    if (endTile.left <= startTile.left) {
        ladderLeft = endTile.left - snakeLadderBoard.left;
        ladderWidth = startTile.left - endTile.left + 60;
    } else {
        ladderLeft = startTile.left - snakeLadderBoard.left;
        ladderWidth = endTile.left - startTile.left + 60;
    }
    let ladderPos = endTile.left < startTile.left ? 'reverse' : 'default';
    let ladderHeightTile = ladderHeight / 60;
    let ladderWidthTile = ladderWidth / 60;
    let angle = Math.atan(ladderHeightTile / ladderWidthTile) * 180 / Math.PI;
    tileStyles = {
        top: `${ladderTop}px`,
        left: `${ladderLeft}px`,
        height: `${ladderHeight}px`,
        width: `${ladderWidth}px`,
        backgroundImage: `url(${process.env.PUBLIC_URL + 'images/ladder.png'})`,
        transform: ladderPos === 'default' ? `rotate(${90 - angle}deg)` : `rotate(${90 + angle}deg)`
    }
    if (ladderWidth === 60) tileStyles.transform = 'rotate(0deg)';
    if (ladderHeight === 60) {
        tileStyles.backgroundImage = `url(${process.env.PUBLIC_URL + 'images/ladder-h.png'})`;
        tileStyles.transform = 'rotate(180deg)';
        tileStyles.backgroundRepeat = 'repeat-x'
    }
    return tileStyles
}


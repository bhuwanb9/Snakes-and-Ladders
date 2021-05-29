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
        start: 4,
        end: 34
    }
];

export function generateTiles() {
    let tilesColor = ['yellow', 'white', 'red', 'blue', 'green', 'white', 'red', 'yellow', 'green', 'blue'];
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
    if (endTile.left <= startTile.left) {
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
    if (snakePos === 'reverse') tileStyles.transform = 'rotateY(180deg)';
    return tileStyles
}

export function calculateLadderStyle(data) {
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
    let tileStyles = {
        top: `${ladderTop}px`,
        left: `${ladderLeft}px`,
        height: `${ladderHeight}px`,
        width: `${ladderWidth}px`,
        backgroundImage: `url(${process.env.PUBLIC_URL + 'images/ladder.png'})`
    }
    let ladderPos = endTile.left < startTile.left ? 'reverse' : 'default';
    //if (ladderPos === 'reverse') tileStyles.transform = 'rotateY(180deg)';
    return tileStyles
}


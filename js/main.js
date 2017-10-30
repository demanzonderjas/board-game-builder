let bg, board, boardData, game, gameData;

import Board from './Board.js';
import Game from './Game.js';

window.preload = () => {
    bg = loadImage("./../img/board.jpg");
    boardData = loadJSON("./../data/board.json");
    gameData = loadJSON("./../data/game.json");
}

window.setup = () => {
    createCanvas(800, 800);
    board = new Board(boardData);
    game = new Game(gameData, board);
    board.createPawn();
}

window.draw = () => {
    background(bg);
    board.pawns.forEach((pawn, idx) => {
        if(pawn.isMoving && frameCount % 30 === 0) {
            board.movePawn(idx);
        }
        pawn.show();
    });
    if(game.dice.rolling && frameCount % 5 === 0) {
        game.dice.roll();
    }
}

window.addEventListener("click", () => {
    game.dice.start();
    setTimeout(() => {
        game.dice.stop((outcome) => game.showAssignment.call(game, outcome));
    }, 1500);
});

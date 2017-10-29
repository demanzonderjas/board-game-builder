let bg, board, boardData, dice, game, gameData;

import Board from './Board.js';
import Dice from './Dice.js';
import Game from './Game.js';

window.preload = () => {
    bg = loadImage("board.jpg");
    boardData = loadJSON("board.json");
    gameData = loadJSON("game.json");
}

window.setup = () => {
    createCanvas(800, 800);
    board = new Board(boardData);
    game = new Game(gameData, board);
    dice = new Dice();
    board.createPawn();
}

window.draw = () => {
    background(bg);
    board.pawns.forEach(pawn => pawn.show());
    if(dice.rolling) {
        dice.roll();
    }
}

window.addEventListener("click", () => {
    dice.start();
    setTimeout(() => {
        dice.stop(() => game.showAssignment.call(game));
    }, 1500);
});

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
    boardData.presents.forEach(present => board.createPresent(present));
}

window.draw = () => {
    background(bg);
    board.presents.forEach(present => {
        present.show();
    });
    board.pawns.forEach((pawn, idx) => {
        if(pawn.isMoving && frameCount % 35 === 0) {
            board.movePawn(idx);
        }
        pawn.show();
        board.presents.forEach(present => {
            present.canBeOpened(pawn.square);
        });
    });


    if(game.dice.rolling && frameCount % 5 === 0) {
        game.dice.roll();
        board.presents.forEach(present => {
            if(present.opened && present.element.style.display == "block") {
                present.hide();
            }
        });
    }
}

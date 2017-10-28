let bg, board, boardData;

import Board from './Board.js';

window.preload = () => {
    bg = loadImage("board.jpg");
    boardData = loadJSON("board.json");
}

window.setup = () => {
    createCanvas(800, 800);
    board = new Board(boardData);
    board.createPawn();
}

window.draw = () => {
    background(bg);
    board.pawns.forEach(pawn => pawn.show());
}

window.mousePressed = () => {
    board.movePawn(0, 1);
}

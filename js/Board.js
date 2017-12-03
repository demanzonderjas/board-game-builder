import Pawn from './Pawn.js';
import Present from './Present.js';

export default class Board {
    constructor(data) {
        this.squares = data.squares;
        this.pawns = [];
        this.presents = [];
        this.totalSquares = 30;
    }

    createPawn() {
        const icon = loadImage("./../img/pawn.jpg");
        this.pawns.push(new Pawn(this.getSquarePos(0), icon));
    }

    createPresent(data) {
        const icon = loadImage("./../img/present.png");
        this.presents.push(new Present(this.getSquarePos(data.square), data.square, data.content, icon));
    }

    getSquarePos(num) {
        return this.squares[num].coords;
    }

    movePawn(pawnNum) {
        const newSquare = this.pawns[pawnNum].square + 1;
        this.pawns[pawnNum].move(this.getSquarePos(newSquare));
    }

    setPoints(pawnNum, points) {
        this.pawns[pawnNum].pointsLeft = points;
        this.pawns[pawnNum].isMoving = true;
    }
}

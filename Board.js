import Pawn from './Pawn.js';

export default class Board {
    constructor(json) {
        this.squares = json.squares;
        this.pawns = [];
        this.totalSquares = 30;
    }

    createPawn() {
        const icon = loadImage("rabbit.ico");
        this.pawns.push(new Pawn(this.getSquarePos(0), icon));
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

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

    movePawn(pawnNum, points) {
        const newSquare = this.pawns[pawnNum].square + points;
        console.log(newSquare);
        this.pawns[pawnNum].move(this.getSquarePos(newSquare), newSquare);
    }

    getSquarePos(num) {
        return this.squares[num].coords;
    }
}

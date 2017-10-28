import Pawn from './Pawn.js';

export default class Board {
    constructor(json) {
        this.squares = json.squares;
        this.pawns = [];
    }

    createPawn() {
        const icon = loadImage("rabbit.ico");
        this.pawns.push(new Pawn(this.getSquarePos(0), icon));
    }

    movePawn(pawnNum, square) {
        this.pawns[pawnNum].move(this.getSquarePos(square));
    }

    getSquarePos(num) {
        return this.squares[num].coords;
    }
}

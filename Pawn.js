export default class Pawn {
    constructor(pos, icon) {
        this.x = pos.x;
        this.y = pos.y;
        this.square = 0;
        this.icon = icon;
        this.size = 50;
    }

    move(pos, square) {
        this.x = pos.x;
        this.y = pos.y;
        this.square = square;
    }

    show() {
        image(this.icon, this.x, this.y, this.size, this.size);
    }
}

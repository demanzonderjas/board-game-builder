export default class Pawn {
    constructor(pos, icon) {
        this.x = pos.x;
        this.y = pos.y;
        this.icon = icon;
        this.size = 50;
    }

    move(pos) {
        this.x = pos.x;
        this.y = pos.y;
    }

    show() {
        image(this.icon, this.x, this.y, this.size, this.size);
    }
}

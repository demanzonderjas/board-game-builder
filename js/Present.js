export default class Present {
    constructor(pos, square, icon) {
        this.x = pos.x;
        this.y = pos.y;
        this.square = square;
        this.size = 50;
        this.icon = icon;
    }

    show() {
        image(this.icon, this.x, this.y, this.size, this.size);
    }
}

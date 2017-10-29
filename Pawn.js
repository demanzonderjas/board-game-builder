export default class Pawn {
    constructor(pos, icon) {
        this.x = pos.x;
        this.y = pos.y;
        this.square = 0;
        this.pointsLeft = 0;
        this.icon = icon;
        this.isMoving = false;
        this.size = 50;
    }

    move(pos) {
        if(this.isMoving && this.pointsLeft) {
            this.square = this.square + 1;
            this.pointsLeft = this.pointsLeft - 1;
            this.x = pos.x;
            this.y = pos.y;
        } else {
            this.isMoving = false;
        }
    }

    show() {
        image(this.icon, this.x, this.y, this.size, this.size);
    }
}

export default class Present {
    constructor(pos, square, content, icon) {
        this.x = pos.x;
        this.y = pos.y;
        this.square = square;
        this.content = content;
        this.opened = false;
        this.size = 50;
        this.icon = icon;
        this.element = document.getElementById("present");
    }

    canBeOpened(playerSquare) {
        if(playerSquare == this.square && !this.opened) {
            this.open();
            return true;
        }
        return false;
    }

    hide() {
        this.element.style.display = "";
        this.element.classList.remove("opening");
    }

    open() {
        this.element.style.display = "block";
        this.element.querySelector(".content").innerHTML = this.content;
        this.element.addEventListener("click", () => this.element.classList.add("opening"));
        this.opened = true;
    }

    show() {
        if(!this.opened) {
            image(this.icon, this.x, this.y, this.size, this.size);
        }
    }
}

export default class Dice {
    constructor(sides, categories) {
        this.sides = sides;
        this.rolling = false;
        this.element = this.init();
        this.outcome = null;
        this.categories = categories;
    }

    init() {
        let dice = document.createElement("div");
        dice.setAttribute("class", "dice");
        dice.innerHTML = "<div class='red-button'></div>";
        document.body.appendChild(dice);
        return dice;
    }

    setButton() {
        this.element.innerHTML = "<div class='red-button'></div>";
    }

    listen(game) {
        this.element.addEventListener("click", () => {
            this.start();
            setTimeout(() => this.stop((outcome) => game.showAssignment.call(game, outcome)), 1500);
        });
    }

    roll() {
        const outcome = Math.floor(random(this.sides));
        const image = this.categories[outcome].image;
        this.element.innerHTML = `<img src="./../img/categories/${image}" width="300" height="300"/>`;
        this.outcome = this.categories[outcome];
    }

    start() {
        this.rolling = true;
    }

    stop(cb) {
        this.rolling = false;
        cb(this.outcome);
    }
}

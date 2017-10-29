export default class Dice {
    constructor(sides) {
        this.sides = 6;
        this.rolling = false;
        this.element = this.init();
        this.outcome = null;
    }

    init() {
        let dice = document.createElement("p");
        dice.setAttribute("class", "dice");
        dice.innerHTML = "%";
        document.body.appendChild(dice);
        return dice;
    }

    roll() {
        this.outcome = Math.ceil(random(this.sides));
        this.element.innerHTML = this.outcome;
    }

    start() {
        this.rolling = true;
    }

    stop(cb) {
        this.rolling = false;
        cb(this.outcome);
    }
}

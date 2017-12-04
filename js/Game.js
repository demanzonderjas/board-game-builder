import Assignment from './Assignment.js';
import Dice from './Dice.js';

export default class Game {
    constructor(data, board) {
        this.assignments = data.assignments.map(assignment => new Assignment(assignment));
        this.activeAssignment = null;
        this.board = board;
        this.dice = new Dice(6, data.categories);
        this.dice.listen(this);
    }

    checkOutcome([isCorrect, points]) {
        if(isCorrect) {
            this.activeAssignment.element.classList.add("right");
            setTimeout(() => {
                this.board.setPoints(0, points);
                this.activeAssignment.hide();
                this.activeAssignment.element.classList.remove("right");
                this.dice.setButton();
            }, 1000);
        } else {
            this.activeAssignment.element.classList.add("wrong");
            setTimeout(() => {
                this.activeAssignment.hide();
                this.activeAssignment.element.classList.remove("wrong");
                this.dice.setButton();
            }, 1000);
        }
    }

    selectAssignment(category) {
        const chosen = this.assignments.filter(a => a.category == category.name && !a.answered);
        return (chosen.length > 0) ? random(chosen) : false;
    }

    showAssignment(outcome) {
        const newAssignment = this.selectAssignment(outcome);
        if(newAssignment) {
            this.activeAssignment = newAssignment;
            this.activeAssignment.show((outcome, points) => this.checkOutcome.call(this, [outcome, points]));
        } else {
            this.dice.element.click();
        }
    }
}

import Assignment from './Assignment.js';
import Dice from './Dice.js';

export default class Game {
    constructor(data, board) {
        this.assignments = data.assignments;
        this.activeAssignment = null;
        this.board = board;
        this.dice = new Dice(6, data.categories);
        this.dice.listen(this);
    }

    checkOutcome([isCorrect, points]) {
        if(isCorrect) {
            this.board.setPoints(0, points);
        }
        this.activeAssignment.hide();
    }

    selectAssignment(category) {
        const chosen = this.assignments.filter(a => a.category == category.name && !a.answered);
        return (chosen.length > 0) ? random(chosen) : false;
    }

    showAssignment(outcome) {
        const newAssignment = this.selectAssignment(outcome);
        if(newAssignment) {
            this.activeAssignment = new Assignment(newAssignment);
            this.activeAssignment.show((outcome, points) => this.checkOutcome.call(this, [outcome, points]));
        } else {
            this.dice.element.click();
        }
    }
}

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
        const chosen = this.assignments.filter(a => a.category == category.name);
        return random(chosen);
    }

    showAssignment(outcome) {
        this.activeAssignment = new Assignment(this.selectAssignment(outcome));
        this.activeAssignment.show((outcome, points) => this.checkOutcome.call(this, [outcome, points]));
    }
}

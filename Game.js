import Assignment from './Assignment.js';

export default class Game {
    constructor(data, board) {
        this.assignments = data.assignments;
        this.activeAssignment = null;
        this.board = board;
    }

    checkOutcome([isCorrect, points]) {
        console.log(isCorrect, points);
        if(isCorrect) {
            this.board.setPoints(0, points);
        }
        this.activeAssignment.hide();
    }

    selectAssignment() {
        return random(this.assignments);
    }

    showAssignment(outcome) {
        this.activeAssignment = new Assignment(this.selectAssignment());
        this.activeAssignment.show((outcome, points) => this.checkOutcome.call(this, [outcome, points]));
    }
}

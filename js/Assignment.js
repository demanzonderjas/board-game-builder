import Answer from './Answer.js';

export default class Assignment {
    constructor(data) {
        this.type = data.type;
        this.title = data.title;
        this.points = data.points;
        this.answers = data.answers;
        this.category = data.category;
        this.correct = data.correct;
        this.answered = false;
        this.element = document.getElementById("assignment");
        this.cb = null;

        // clear previous assignment
        this.element.querySelector(".answers").innerHTML = "";
    }

    checkAnswer(answer) {
        this.answered = true;
        this.cb(answer.indicator === this.correct, this.points);
    }

    hide() {
        this.element.style.display = "";
    }

    loadAnswers() {
        this.answers.forEach((text, idx) => {
            let answer = new Answer(text, idx);
            this.element.querySelector(".answers").appendChild(answer.element);
            answer.element.addEventListener("click", () => this.checkAnswer(answer));
        });
    }

    show(cb) {
        this.cb = cb;
        this.element.querySelector(".answers").innerHTML = "";
        this.loadAnswers();
        this.element.querySelector(".title").innerHTML = this.title;
        this.element.querySelector(".category").innerHTML = this.category;
        this.element.querySelector(".points").innerHTML = this.points;
        this.element.style.display = "block";
    }
}

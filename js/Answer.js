export default class Answer {
    constructor(text, indicator) {
        this.indicator = indicator;
        this.text = text;
        this.element = this.init();
    }

    init() {
        let answer = document.createElement("li");
        answer.setAttribute("class", "answer");
        answer.innerHTML = (this.indicator+1) + ". " + this.text;
        return answer;
    }
}

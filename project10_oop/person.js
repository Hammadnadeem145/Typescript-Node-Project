export default class Person {
    personality;
    constructor() {
        this.personality = "Unique";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extrovent";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still Unique";
        }
    }
    getPersonality() {
        return this.personality;
    }
}

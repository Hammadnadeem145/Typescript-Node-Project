import Person from "./person.js";
export class Student extends Person {
    name1;
    constructor() {
        super();
        this.name1 = "Hammad Nadeem";
    }
    get name() {
        return this.name1;
    }
    set name(value) {
        this.name1 = value;
    }
}

import Person from "./person.js";

export class Student extends Person {
  private name1: string;

  constructor() {
    super();
    this.name1 = "Hammad Nadeem";
  }
  public get name(): string {
    return this.name1;
  }
  public set name(value: string) {
    this.name1 = value;
  }
}

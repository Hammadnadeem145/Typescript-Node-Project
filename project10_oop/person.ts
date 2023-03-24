export default class Person {
  private personality: string;
  constructor() {
    this.personality = "Unique";
  }
  public askQuestion(answer: number): void {
    if (answer == 1) {
      this.personality = "Extrovent";
    } else if (answer == 2) {
      this.personality = "Introvert";
    } else {
      this.personality = "You are still Unique";
    }
  }

  public getPersonality(): string {
    return this.personality;
  }
}

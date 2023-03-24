import Person from "./person.js";
import { Student } from "./student.js";

class Program {
  static Oop(): void {
    console.log(
      "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself"
    );
    const personObj = new Person();
    personObj.askQuestion(2);
    console.log("Person Obj ====>", personObj);
    console.log("Get Personlity Method:", personObj.getPersonality());

    const studentObj = new Student();
    studentObj.name;
    console.log(
      `Your Name is :${
        studentObj.name
      }! and your Personailty type is : ${studentObj.getPersonality()}`
    );
  }
}

Program.Oop();

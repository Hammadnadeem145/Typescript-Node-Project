class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    constructor(id, name) {
        this.students = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerCourse(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("Ruwaifa", 21, "03144252044");
const student2 = new Student("Salman", 21, "03344529308");
const instructor1 = new Instructor("Zia Khan", 25, 45000);
const instructor2 = new Instructor("Zeeshan Hanif", 36, 45000);
const course1 = new Course("3.0", "Metaverse and Blockchin");
const course2 = new Course("5.0", "AI");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
course1.setInstructor(instructor2);
// console.log(course1);
const department = new Department("Web Programming");
department.addCourse(course1);
department.addCourse(course2);
console.log('Student1:', student1);
console.log('Student2:', student2);
console.log('Instructor1:', instructor1);
console.log('Instructor2:', instructor2);
console.log('course1:', course1);
console.log('course2:', course2);
export {};

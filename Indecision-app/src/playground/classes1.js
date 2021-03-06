
class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return "Hi. I am "+this.name+"!";
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let desc = super.getDescription();
        if (this.hasMajor()) {
            desc += ` Their major is ${this.major}.`;
        }
        return desc;
    }
}

const me = new Student("Serenity", 20, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
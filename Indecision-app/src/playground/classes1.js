
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

}

const me = new Student("Serenity", 20);
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
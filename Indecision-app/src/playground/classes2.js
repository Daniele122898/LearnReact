// this is another class bcs i forgot everything i learned bcs i suck major d***
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
  getGreeting() {
    return `Hi. I am ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() { return !!this.major; }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `. Their major is ${this.major}.`;
    }
    return description;
  }
}

const me = new Student('Andrew Mead', 26, 'Computer Science BSc');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

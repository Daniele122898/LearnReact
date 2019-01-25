const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 30
  }
};

const {name, age} = person;
console.log(`${name} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} degrees in ${city}.`);
}
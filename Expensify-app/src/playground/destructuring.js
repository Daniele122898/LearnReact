const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 30
  }
};

const {name: firstName = 'Anonymous', age = 0} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} degrees in ${city}.`);
}
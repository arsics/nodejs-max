const person = {
    name: 'Sasha',
    age: 38,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

// destructuring means we take any object that has 'name' field
const printNameAlt = ({ name }) => {
    console.log(name);
}
printNameAlt(person);

// we can use destructuring outside of functions:
const {name, age} = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking', 'unused'];
let [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

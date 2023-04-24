// Q1. Create an array of 10 numbers and use a for loop to iterate through the array and print out each number.
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Q2. Use the forEach method to add 5 to each number in the array and print out the updated array.
const arr2 = [];
arr.forEach((el) => {
    arr2.push(el + 5);
})
console.log(arr2);

// Q3. Write a function called sumArray that takes an array of numbers and returns the sum of all the numbers.
function sumArray(arr) {
    let sum = 0;
    arr.forEach(el => {
        sum += el;
    })
    return sum;
}

// Q4. Write a function called calculator that takes two numbers and an operator (+, -, *, /) as arguments and returns the result of the operation.
function calculator(a, b, opr) {
    switch (opr) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            return "Invalid operator";
    }
}

// Q5. Create an object with properties for name, age, and occupation. Write a function called printPerson that takes an object and returns a sentence with their name, age, and occupation.
const person = {
    name: "Rohan",
    age: 25,
    occupation: "Student"
}

function printPerson(obj) {
    return `My name is ${obj.name}. My age is ${obj.age}. My occupation is ${obj.occupation}.`
}

// Q6. Create a class called Person with properties for name, age, and occupation. Write a method in the Person class called printInfo that returns a sentence with their name, age, and occupation.
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    printInfo() {
        return `My name is ${this.name}. My age is ${this.age}. My occupation is ${this.occupation}.`
    }
}
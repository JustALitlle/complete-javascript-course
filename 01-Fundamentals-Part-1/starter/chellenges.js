//Challenge 1
let markMass = 78;
let markHeight = 1.68;
const johnMass = 92;
const johnHeight = 1.85;

let BMIMark = markMass / (markHeight * markHeight);
let BMIJohn = johnMass / (johnHeight * johnHeight);
console.log(BMIJohn, BMIMark);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//Challenge 2
// console.log("Mark's BMI is higher than John's")
// console.log(`Mark's  BMI ${BMIMark} is higher than John's ${BMIJohn}`)

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higher than Mark's");
}

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}
//Challenge 3

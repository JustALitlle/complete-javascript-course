let markMass = 78;
let markHeight = 1.68;
const johnMass = 92;
const johnHeight = 1.85;

let BMIMark = markMass / (markHeight * markHeight);
let BMIJohn = johnMass / (johnHeight * johnHeight);
console.log(BMIJohn, BMIMark);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
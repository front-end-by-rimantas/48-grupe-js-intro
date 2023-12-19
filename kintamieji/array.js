/*
ARRAY - arėjus, masyvas, sąrašas, listas, matrica
*/

const luckyNumber1 = 1;
const luckyNumber2 = 2;
const luckyNumber3 = 3;

console.log(luckyNumber1);
console.log(luckyNumber2);
console.log(luckyNumber3);

const luckySum = luckyNumber1 + luckyNumber2 + luckyNumber3;
console.log(luckySum);

const luckyNumbers = [1, 2, 3];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);
console.log('Jonas', 'Maryte', 'Petras', 'Ona');

const booleanList = [true, false, true, true, false, false];
console.log(booleanList);

const mix = [1, 'asd', true, []];

console.clear();

// Koks pazymiu vidurkis?
const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;
const mark6 = 10;

const markSum = mark1 + mark2 + mark3 + mark4 + mark5 + mark6;
const markCount = 6;

const average = markSum / markCount;
console.log('Average:', average);


// index:       0, 1, 2, 3, 4, ....
const marks = [10, 2, 8, 4, 6, 10];

let marksArraySum = 0;

marksArraySum += marks[0];
marksArraySum += marks[1];
marksArraySum += marks[2];
marksArraySum += marks[3];
marksArraySum += marks[4];
marksArraySum += marks[5];

const marksArrayLength = marks.length;

const marksAverage = marksArraySum / marksArrayLength;
console.log('Array average:', marksAverage);
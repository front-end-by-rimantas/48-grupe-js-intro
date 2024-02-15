const students = [
    {
        name: 'Jonas',
        marks: [2],
    },
    {
        name: 'Maryte',
        marks: [9, 8, 7],
    },
    {
        name: 'Petras',
        marks: [10, 10],
    },
    {
        name: 'Ona',
        marks: [7, 7, 7, 7, 7],
    },
];

// Koks yra klases mokiniu pazymiu vidurkis?
console.log('\nKoks yra klases mokiniu pazymiu vidurkis?');

const classAverageList = students
    .map(student => student.marks)
    .reduce((t, marks) => t.concat(marks), []);
const classAverage = classAverageList.reduce((t, mark) => t + mark, 0) / classAverageList.length;

console.log(classAverage);

// Koks yra klases mokiniu pazymiu vidurkiu vidurkis?
console.log('\nKoks yra klases mokiniu pazymiu vidurkiu vidurkis?');

const classAverageAverage = students
    .map(student => student.marks)
    .map(marks => marks.reduce((t, mark) => t + mark, 0) / marks.length)
    .reduce((t, average) => t + average, 0) / students.length;

console.log(classAverage);

// Kokia yra klases pazymiu mediana?
console.log('\nKokia yra klases pazymiu mediana?');

const classMedianList = students
    .map(student => student.marks)
    .reduce((t, marks) => t.concat(marks), [])
    .sort((a, b) => a - b);
const classMedian = classMedianList % 2 === 0
    ? (classMedianList[Math.floor(classMedianList.length / 2)] + classMedianList[Math.floor(classMedianList.length / 2)]) / 2
    : classMedianList[Math.floor(classMedianList.length / 2)];

console.log(classMedian);

// Koks yra maziausias pazymys?
console.log('\nKoks yra maziausias pazymys?');

const smallestMark = students
    .map(student => student.marks)
    .reduce((t, marks) => t.concat(marks), [])
    .sort((a, b) => a - b)
    .at(0);

console.log(smallestMark);

// Koks yra didziausias pazymys?
console.log('\nKoks yra didziausias pazymys?');

const biggestMark = students
    .map(student => student.marks)
    .reduce((t, marks) => t.concat(marks), [])
    .sort((a, b) => a - b)
    .at(-1);

console.log(biggestMark);

// Koks yra skirtumas tarp didziausio ir maziausio pazymiu?
console.log('\nKoks yra skirtumas tarp didziausio ir maziausio pazymiu?');

const markMinMaxDiff = students
    .map(student => student.marks)
    .reduce((t, marks) => t.concat(marks), [])
    .sort((a, b) => b - a);

console.log(markMinMaxDiff);

// Koks yra vardas studento kuris turi maziausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymiu vidurki?
// Koks yra vardas studento kuris turi prasciausia pazymiu vidurki?
// Koks yra vardas studento kuris turi maziausiai pazymiu?
// Koks yra vardas studento kuris turi daugiausiai pazymiu?
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (didejimo tvarka).
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (mazejimo tvarka).
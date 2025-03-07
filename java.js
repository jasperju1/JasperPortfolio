const studentName = "Alex";
let age = 20;
let grades = [85, 90, 78, 92];
let studentInfo = { name: "Alex", major: "Computer Science" };
let isGraduated = false;

const calculateAverage = (gradesArray) => {
    let sum = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        sum += gradesArray[i];
    }
    return sum / gradesArray.length;
};

let averageGrade = calculateAverage(grades);
console.log(`Student: ${studentName}, Average Grade: ${averageGrade}`);

if (averageGrade >= 90) {
    console.log("Excellent performance! 🎉");
} else if (averageGrade >= 75) {
    console.log("Good job! Keep improving. 👍");
} else {
    console.log("You need to work harder. 📚");
}

if (age === 20) {
    console.log("The student is 20 years old.");
} else {
    console.log("The student is not 20 years old.");
}

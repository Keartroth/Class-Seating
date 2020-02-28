import student from "./student.js";
import { useStudentData } from "./studentDataProvider.js";


const studentMaker = () => {
    const studentRowOne = document.querySelector(".students__rowOne");
    const studentRowTwo = document.querySelector(".students__rowTwo");
    const studentRowThree = document.querySelector(".students__rowThree");
    
    const arrayOfStudentObject = useStudentData();

    for (const pupil of arrayOfStudentObject) {
        if (pupil.row === "one") {
            studentRowOne.innerHTML += student(pupil);
        } else if (pupil.row === "two") {
            studentRowTwo.innerHTML += student(pupil);
        } else if (pupil.row === "three") {
            studentRowThree.innerHTML += student(pupil);
        }
    }
}

export default studentMaker;
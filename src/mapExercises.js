import { useStudents } from "./data/classroom.js";

const students = useStudents();

//* Export a function named getStudentNames
//* It should not accept any parameters`
export const getStudentNames = () => {
  let fullStudentNames = students.map((student) => {
    //? It should return an array of strings. Each string should be the full name of the student
    return `${student.firstName} ${student.lastName}`
  })
  return fullStudentNames
}

//* Export a function named StudentList
//* It should not accept any parameters
export const StudentList = () => {
  //? create an array for every student 
  let HtmlString = students.map((student) => {
    //? return a single HTMLString that contains a <div> element 
    return `<div>
      <h1>${student.firstName} ${student.lastName}</h1>
      <h2>Cohort ${student.cohort}</h2>
    </div>`;
  });
  //? joins the string, adding a space between the first and last name
  return HtmlString.join(" ");
};

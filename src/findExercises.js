import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

//* Export a function called getStudentById
//* It should accept one integer parameter named `id`
export const getStudentById = (id) => {
    // ? It should return the student object with the matching ID
    return students.find(students => students.id === id)
}
// Ex: getStudentById(1)

//* Export a function called getInstructorById
//* It should accept one integer parameter named `id`
export const getInstructorById = (id) => {
    // ? It should return the instructor object with the matching ID
    return instructors.find(instructors => instructors.id === id)
}
// Ex: getInstructorById(1)

//* Export a function called getStudentByLastName
//* It should accept one string parameter named `lastName`
export const getStudentByLastName = (lastName)=> {
    //? It should return the student object whose last name matches `lastName`
    //! It should NOT be case sensitive
    //? converts lastName to uppercalse
    return students.find(students => students.lastName.toUpperCase() === lastName.toUpperCase())
}
// Ex: getStudentByName("sMiTh")

//* Export a function called getStudentByName
//* It should accept one string parameter named `fullName`
export const getStudentByName = (fullName) => {
    // ? It should return the student object whose first and last name match `fullName`
    // ! It should NOT be case sensitive
    // ? Combines names and makes them uppercase
    let studentByFullName = students.find(student => `${student.firstName} ${student.lastName}`.toUpperCase() === fullName.toUpperCase());
    return studentByFullName
}
// Ex: getStudentByName("Summer SMITH")

//* Export a function called getInstructorOfStudent
//* It should accept one integeter parameter named `studentId`
export const getInstructorOfStudent = (studentId) => {
    //? It should return the instructor object of the student whose id matches `studentId`
    let studentIdInstructor = students.find(student => studentId === student.id)
    return instructors.find(instructor => instructor.id === studentIdInstructor.instructorId)
}
// Ex: getInstructorOfStudent(4)      // returns Brenda Long

//* Export a function called getStudentWithMostLangs
//* It should not accept any parameters
export const getStudentWithMostLangs = () => {
    // ? It should return the student object who knows the most programming languages
    // ?create an empty array to then store student languages in 
    let mostLanguages = []
    students.forEach(student => {
        mostLanguages.push(student.languages.length)
    })
    //? create an array with the first value to be the largest
    let largestLanguage = [0]
    //? for each loop that compares if language is larger than the 
    mostLanguages.forEach(language => {
        if (language > largestLanguage[0]) {
            largestLanguage.pop();
            largestLanguage.push(language)
        }

    })
    //* returns student who knows the most programming languages
    return students.find(student => student.languages.length === largestLanguage[0])
}
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate

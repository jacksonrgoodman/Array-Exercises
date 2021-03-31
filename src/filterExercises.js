import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// * Export a function named getStudentsInCohort
// * It should accept one integer parameter named `cohort`
export const getStudentsInCohort = (cohort) => {
    // ? It should return an array of just the students who are in that cohort
    return students.filter(students => cohort === students.cohort)
}

// * Export a function called getFullTimeStudents
// * It should not accept any parameters
export const getFullTimeStudents = () => {
    // ? It should return an array of only the full time students
    return students.filter(students => students.fullTime === true)
}

// * Export a function called getStudentsByInstructorId
// * It should accept one integer parameter name `instructorId`
export const getStudentsByInstructorId = (instructorId) => {
    // ? It should return an array of students with that instructor
    return students.filter(students => students.instructorId === instructorId)
}

// * Export a function called getPolyglotStudents
// * It should accept one integer parameter named `languageCount`
export const getPolyglotStudents =(languageCount) => {
    // ?It should return an array of students who know as many (or more) languages than `languageCount`
    // Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned
    return students.filter(students => students.languages.length >= languageCount)
}

//? getAvailableInstructors() to use. I think I understand this one the least but I can learn the most from it.
// * Export a function called getAvailableInstructors
// * It should not accept any parameters
export const getAvailableInstructors = () => {
    let studentArray = useStudents().map(item => {
        return item.instructorId;
	})
	return useInstructors().filter(item => {
        if (studentArray.includes(item.id) === false) {
            return item 
		}
	})
}

//? getAvailableInstructors() to study. better code but convoluted how I got it to work.
// * Export a function called getAvailableInstructors
// * It should not accept any parameters
// export const getAvailableInstructors = () => {
//     // ? Make a new array of instructors to loop through
//     return instructors.filter(instructors => {
//         // ? if previous array <does NOT(!)> <INCLUDE (.includes)> the same <id> as <instructorId>s listed in the <students> objects
//         if (!((students.map(students =>students.instructorId)).includes(instructors.id))) { 
//             // ? It should return an array of instructors that don't have any students
//             return instructors;
//         }
//     })
// }

// * Export a function called getStudentsByLanguage
// * It should accept one string parameter named `language`
export const getStudentsByLanguage = (language) => {
    //? filter the students that include the language parameter that we are passing
    return students.filter(students => students.languages.includes(language))
}
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])

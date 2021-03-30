// There is no need to edit this file

const students = [
  {
    id: 1,
    firstName: "Summer",
    lastName: "Smith",
    languages: ["Javascript", "C#", "Python", "Ruby"],
    cohort: 43,
    fullTime: true,
    instructorId: 2,
  },
  {
    id: 2,
    firstName: "Tammy",
    lastName: "Gueterman",
    languages: ["Swift", "Kotlin"],
    cohort: 42,
    fullTime: true,
    instructorId: 1,
  },
  {
    id: 3,
    firstName: "Rick",
    lastName: "Sanchez",
    languages: ["Kotlin", "Java", "Javascript", "Python", "Go", "PHP"],
    cohort: 43,
    fullTime: true,
    instructorId: 2,
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Krombopulous",
    languages: ["Javascript", "C#", "Go"],
    cohort: 44,
    fullTime: true,
    instructorId: 3,
  },
  {
    id: 5,
    firstName: "Taddy",
    lastName: "Mason",
    languages: ["Rust", "Python"],
    cohort: 12,
    fullTime: false,
    instructorId: 6,
  },
  {
    id: 6,
    firstName: "Morty",
    lastName: "Cronenberg",
    languages: ["Javascript"],
    cohort: 12,
    fullTime: false,
    instructorId: 6,
  },
];

const instructors = [
  {
    id: 1,
    name: "Adam Sheaffer",
  },
  {
    id: 2,
    name: "Andy Collins",
  },
  {
    id: 3,
    name: "Brenda Long",
  },
  {
    id: 4,
    name: "Jisie David",
  },
  {
    id: 5,
    name: "Joe Shepard",
  },
  {
    id: 6,
    name: "Steve Brownlee",
  },
];

export const useStudents = () => [...students];
export const useInstructors = () => [...instructors];

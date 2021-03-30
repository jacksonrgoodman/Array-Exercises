import {
  getStudentById,
  getInstructorById,
  getStudentByLastName,
  getStudentByName,
  getInstructorOfStudent,
  getStudentWithMostLangs,
} from "../src/findExercises";
import { useStudents, useInstructors } from "../src/data/classroom";

describe("getStudentById", () => {
  test("should get a student by ID", () => {
    const id = 1;
    const expected = useStudents().find((s) => s.id === id);
    const actual = getStudentById(id);

    expect(actual).toBe(expected);
  });

  test("should be implemented using the `find` method", () => {
    const spy = jest.spyOn(Array.prototype, "find");
    const expected = useStudents()[0];
    const actual = getStudentById(1);

    expect(actual).toBe(expected);
    expect(spy).toHaveBeenCalled();
  });
});

describe("getInstructorById", () => {
  test("should get an instructor by ID", () => {
    const id = 2;
    const expected = useInstructors().find((s) => s.id === id);
    const actual = getInstructorById(id);

    expect(actual).toBe(expected);
  });

  test("should be implemented using the `find` method", () => {
    const spy = jest.spyOn(Array.prototype, "find");
    const expected = useInstructors()[2];
    const actual = getInstructorById(3);

    expect(actual).toBe(expected);
    expect(spy).toHaveBeenCalled();
  });
});

describe("getStudentByLastName", () => {
  test("should get a student by last name with correct casing", () => {
    const lastName = "Sanchez";
    const expected = useStudents()[2];
    const actual = getStudentByLastName(lastName);

    expect(actual).toBe(expected);
  });

  test("should get a student by last name with different casing", () => {
    const lastName = "sAnChEz";
    const expected = useStudents()[2];
    const actual = getStudentByLastName(lastName);

    expect(actual).toBe(expected);
  });

  test("should be implemented using the `find` method", () => {
    const spy = jest.spyOn(Array.prototype, "find");
    const expected = useStudents()[2];
    const actual = getStudentByLastName("Sanchez");

    expect(actual).toBe(expected);
    expect(spy).toHaveBeenCalled();
  });
});

describe("getStudentByName", () => {
  test("should get a student by full name with exact casing", () => {
    const name = "Taddy Mason";
    const expected = useStudents()[4];
    const actual = getStudentByName(name);

    expect(actual).toBe(expected);
  });

  test("should get a student by full name with wrong casing", () => {
    const name = "TaDDy MaSOn";
    const expected = useStudents()[4];
    const actual = getStudentByName(name);

    expect(actual).toBe(expected);
  });
});

describe("getInstructorOfStudent", () => {
  test("should get the instructor of a given student", () => {
    const studentId = 4; // Michael Krombopulous
    const expected = useInstructors()[2]; // Brenda;
    const actual = getInstructorOfStudent(studentId);

    expect(actual).toBe(expected);
  });
});

describe("getStudentWithMostLangs", () => {
  test("should get the student with more languages than any other student", () => {
    const expected = useStudents()[2];
    const actual = getStudentWithMostLangs();

    expect(actual).toBe(expected);
  });
});

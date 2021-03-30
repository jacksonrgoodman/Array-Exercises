import { getStudentNames, StudentList } from "../src/mapExercises";
import { useStudents, useInstructors } from "../src/data/classroom";

describe("getStudentNames", () => {
  test("should return full names of students", () => {
    const expected = [
      "Summer Smith",
      "Tammy Gueterman",
      "Rick Sanchez",
      "Michael Krombopulous",
      "Taddy Mason",
      "Morty Cronenberg",
    ];
    const actual = getStudentNames();

    expect(expected).toMatchObject(actual);
  });

  test("should be implemented using the `map` method", () => {
    const spy = jest.spyOn(Array.prototype, "map");
    getStudentNames();

    expect(spy).toHaveBeenCalled();
  });
});

describe("StudentList", () => {
  test("should return the correct HTML string", () => {
    const expected = expectedStudentList().replace(/\s+/g, "");
    const actual = StudentList().replace(/\s+/g, "");

    expect(expected).toBe(actual);
  });

  test("should be implemented with the `map` method", () => {
    const spy = jest.spyOn(Array.prototype, "map");
    StudentList();

    expect(spy).toHaveBeenCalled();
  });
});

const expectedStudentList = () => `
  <div>
    <h1>Summer Smith</h1>
    <h2>Cohort 43</h2>
  </div>
  <div>
    <h1>Tammy Gueterman</h1>
    <h2>Cohort 42</h2>
  </div>
  <div>
    <h1>Rick Sanchez</h1>
    <h2>Cohort 43</h2>
  </div>
  <div>
    <h1>Michael Krombopulous</h1>
    <h2>Cohort 44</h2>
  </div>
  <div>
    <h1>Taddy Mason</h1>
    <h2>Cohort 12</h2>
  </div>
  <div>
    <h1>Morty Cronenberg</h1>
    <h2>Cohort 12</h2>
  </div>
`;

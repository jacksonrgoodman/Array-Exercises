import { useStudents, useInstructors } from "../src/data/classroom";
import {
  getStudentsInCohort,
  getFullTimeStudents,
  getAvailableInstructors,
  getPolyglotStudents,
  getStudentsByInstructorId,
  getStudentsByLanguage,
} from "../src/filterExercises";

describe("getStudentsInCohort", () => {
  test("should filter students by their cohort ID", () => {
    const cohortId = 43;

    const allStudents = useStudents();
    const summer = allStudents[0];
    const rick = allStudents[2];

    const actual = getStudentsInCohort(cohortId);

    expect(actual.length).toBe(2);
    expect(actual).toContain(summer);
    expect(actual).toContain(rick);
  });

  test("should be implemented with the filter method", () => {
    const cohortId = 43;
    const spy = jest.spyOn(Array.prototype, "filter");
    const actual = getStudentsInCohort(cohortId);

    expect(spy).toHaveBeenCalled();
  });
});

describe("getFullTimeStudents", () => {
  test("should filter only full time students", () => {
    const allStudents = useStudents();
    const summer = allStudents[0];
    const tammy = allStudents[1];
    const rick = allStudents[2];
    const michael = allStudents[3];

    const actual = getFullTimeStudents();

    expect(actual.length).toBe(4);
    expect(actual).toContain(summer);
    expect(actual).toContain(tammy);
    expect(actual).toContain(rick);
    expect(actual).toContain(michael);
  });

  test("should be implemented with the filter method", () => {
    const spy = jest.spyOn(Array.prototype, "filter");
    const actual = getFullTimeStudents();

    expect(spy).toHaveBeenCalled();
  });
});

describe("getStudentsByInstructorId", () => {
  test("should filter students by their instructor ID", () => {
    const instructorId = 6;

    const allStudents = useStudents();
    const taddy = allStudents[4];
    const morty = allStudents[5];

    const actual = getStudentsByInstructorId(instructorId);

    expect(actual.length).toBe(2);
    expect(actual).toContain(taddy);
    expect(actual).toContain(morty);
  });

  test("should be implemented with the filter method", () => {
    const instructorId = 6;
    const spy = jest.spyOn(Array.prototype, "filter");
    const actual = getStudentsByInstructorId(instructorId);

    expect(spy).toHaveBeenCalled();
  });
});

describe("getPolyglotStudents", () => {
  test("should return students who know x number of languages", () => {
    const languageCount = 4;

    const allStudents = useStudents();
    const summer = allStudents[0];
    const rick = allStudents[2];

    const actual = getPolyglotStudents(languageCount);

    expect(actual.length).toBe(2);
    expect(actual).toContain(summer);
    expect(actual).toContain(rick);
  });
});

describe("getAvailableInstructors", () => {
  test("should return instructors who that don't have students", () => {
    const allInstructors = useInstructors();
    const jisie = allInstructors[3];
    const joe = allInstructors[4];

    const actual = getAvailableInstructors();

    expect(actual.length).toBe(2);
    expect(actual).toContain(jisie);
    expect(actual).toContain(joe);
  });
});

describe("getStudentsByLanguage", () => {
  test("should return students who know the given language", () => {
    const language = "Go";

    const allStudents = useStudents();
    const rick = allStudents[2];
    const michael = allStudents[3];

    const actual = getStudentsByLanguage(language);

    expect(actual.length).toBe(2);
    expect(actual).toContain(rick);
    expect(actual).toContain(michael);
  });
});

// describe("getStudentsByLanguages", () => {
//   test("should get only students who know all given languages", () => {
//     const langs = ["Javascript", "C#"];

//     // expect
//     const summer = useStudents()[0];
//     const michael = useStudents()[3];

//     // actual
//     const actual = getStudentsByLanguages(langs);

//     expect(actual.length).toBe(2);
//     expect(actual).toContainEqual(summer);
//     expect(actual).toContainEqual(michael);
//   });
// });

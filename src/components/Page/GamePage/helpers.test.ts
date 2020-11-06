import { makeEmployeeFixture } from "fixtures/employee";
import { Employee } from "utilities/types";
import {
  convertMillisecondsToSeconds,
  generateRandomEmployee,
} from "./helpers";

describe("convertMillisecondsToSeconds", () => {
  test("Correctly converts milliseconds to seconds", () => {
    const result = convertMillisecondsToSeconds(5000);
    expect(result).toBe(5);
  });
});

describe("generateRandomEmployee", () => {
  test("Verify a call to this function reduces the number of employees by six and generates six random employees", () => {
    let employeeList: Employee[] = [];
    for (let i = 0; i < 10; i++) {
      employeeList = [...employeeList, makeEmployeeFixture()];
    }
    const { filteredEmployees, randomEmployees } = generateRandomEmployee(
      employeeList
    );
    expect(filteredEmployees.length).toBe(4);
    expect(randomEmployees.length).toBe(6);
  });
});

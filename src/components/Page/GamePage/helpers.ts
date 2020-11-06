import { Employee } from "utilities/types";

export const loadPageData = (
  employees: Employee[],
  setEmployees: (employees: Employee[]) => void,
  setEmployeeToGuess: (employee: Employee) => void,
  setRandomEmployees: (employees: Employee[]) => void
) => {
  const {
    firstRandomEmployee,
    randomEmployees,
    filteredEmployees,
  } = generateRandomEmployee(employees);
  setEmployeeToGuess(firstRandomEmployee);
  setRandomEmployees(randomEmployees);
  setEmployees(filteredEmployees);
};

export const convertMillisecondsToSeconds = (milliseconds: number) =>
  Math.round(milliseconds / 1000);

const calculateRandomIndex = (listLength: number) =>
  Math.floor(Math.random() * listLength);

const generateRandomEmployee = (employees: Employee[]) => {
  let randomEmployees: Employee[] = [];
  for (let i = 0; i < 6; i++) {
    const givenIndex = calculateRandomIndex(employees.length);
    const givenEmployee = employees[givenIndex];
    randomEmployees = [...randomEmployees, givenEmployee];
    employees = employees.filter((item) => item !== givenEmployee);
  }
  return {
    firstRandomEmployee:
      randomEmployees[calculateRandomIndex(randomEmployees.length)],
    randomEmployees,
    filteredEmployees: employees,
  };
};

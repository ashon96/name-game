import { Employee } from "utilities/types";

/**
 * For each round, we load up the six employees to guess, uniquely, by calling other helper
 * functions in this file
 * @param employees the current employee list
 * @param setEmployees the useState to modify the current employee list
 * @param setEmployeeToGuess the useState to set the current employee to guess for a given round
 * @param setRandomEmployees the useState to modify the current six employees to guess from
 */
export const loadPageData = (
  employees: Employee[],
  setEmployees: (employees: Employee[]) => void,
  setEmployeeToGuess: (employee: Employee) => void,
  setRandomEmployees: (employees: Employee[]) => void
) => {
  const {
    randomlySelectedEmployee,
    randomEmployees,
    filteredEmployees,
  } = generateRandomEmployee(employees);
  setEmployeeToGuess(randomlySelectedEmployee);
  setRandomEmployees(randomEmployees);
  setEmployees(filteredEmployees);
};

/**
 * Converts the given param from milliseconds to seconds
 * @param milliseconds the quantity to convert to seconds
 */
export const convertMillisecondsToSeconds = (milliseconds: number) =>
  Math.round(milliseconds / 1000);

/**
 * Randomly selects the random index in which to choose randomly from a list
 * @param listLength the boundary in which the random index can exist
 */
const calculateRandomIndex = (listLength: number) =>
  Math.floor(Math.random() * listLength);

/**
 * Generates the random emlpoyee to guess along with the six employees to guess from.
 * After picking each of the six employees, the employee list as a whole decrements by one,
 * removing that given employee in order to enforce unique rounds of employees each time
 * @param employees the overall list of employees
 */
const generateRandomEmployee = (employees: Employee[]) => {
  let randomEmployees: Employee[] = [];
  for (let i = 0; i < 6; i++) {
    const givenIndex = calculateRandomIndex(employees.length);
    const givenEmployee = employees[givenIndex];
    randomEmployees = [...randomEmployees, givenEmployee];
    employees = employees.filter((item) => item !== givenEmployee);
  }
  return {
    randomlySelectedEmployee:
      randomEmployees[calculateRandomIndex(randomEmployees.length)],
    randomEmployees,
    filteredEmployees: employees,
  };
};

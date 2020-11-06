import { NUMBER_OF_ROUNDS, PERCENTAGE_CONVERSION } from "utilities/constants";

/**
 * Of a given selection, we calculate the average and convert to a percentage
 * @param selectionStat the quantity to convert to average, then to percentage
 */
export const calculateSelectionPercentage = (selectionStat: number) =>
  calculateAverage(selectionStat) * PERCENTAGE_CONVERSION;

/**
 * Given the total quantity, we calculate the average
 * by the number of rounds, 5
 * @param totals
 */
export const calculateAverage = (totals: number) => totals / NUMBER_OF_ROUNDS;

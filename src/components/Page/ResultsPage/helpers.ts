/**
 * Of a given selection, we calculate the average and convert to a percentage
 * @param selectionStat the quantity to convert to average, then to percentage
 */
export const calculateSelectionPercentage = (selectionStat: number) =>
  calculateAverage(selectionStat) * 100;

/**
 * Given the total quantity, we calculate the average
 * by the number of rounds, 5
 * @param totals
 */
export const calculateAverage = (totals: number) => totals / 5;

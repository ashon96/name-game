export const calculateSelectionPercentage = (selectionStat: number) =>
  calculateAverage(selectionStat) * 100;

export const calculateAverage = (totals: number) => totals / 5;

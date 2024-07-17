export const computeNetProfit = (price: number, acquisitionCost: number) => {
  return parseFloat((price - acquisitionCost).toFixed(2));
};

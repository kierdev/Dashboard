export const calculateMargin = (price: number, acquisitionCost: number) => {
  return Math.round(((price - acquisitionCost) / price) * 100 * 100) / 100;
};

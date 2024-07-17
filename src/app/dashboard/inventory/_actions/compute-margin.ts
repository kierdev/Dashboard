export const computeMargin = (price: number, acquisitionCost: number) => {
  return parseFloat(
    (Math.round(((price - acquisitionCost) / price) * 100 * 100) / 100).toFixed(
      2
    )
  );
};

export const formatMoney = (amount: number) => {
  // Convert amount to fixed decimal format with two decimal places
  const formattedAmount = amount.toFixed(2);

  // Separate integer and fractional parts
  const [integerPart, decimalPart] = formattedAmount.split(".");

  // Format integer part with thousand separators
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    " "
  );

  // Return formatted string
  return `PHP ${formattedIntegerPart}.${decimalPart}`;
};

export const formatChartLabel = (dateString: string) => {
  const day = new Date(dateString).getDate();
  return String(day).padStart(2, "0");
};

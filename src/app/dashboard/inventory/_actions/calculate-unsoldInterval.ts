export const calculateUnsoldInterval = (dateReleased: Date) => {
  const now = new Date();
  const d = new Date(dateReleased);

  const millisecondsDiff = now.getTime() - d.getTime();

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const days = millisecondsDiff / millisecondsPerDay;

  return Math.floor(days);
};

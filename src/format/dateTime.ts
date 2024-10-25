export const dateTimeStr = (date: Date, timeZone?: string) =>
  date.toLocaleDateString('en-GB', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

export const dateTimeExcelStr = (date: Date, timeZone?: string) => {
  const str = date.toLocaleDateString('en-GB', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return str.split('/').join('.').split(',').join('');
};

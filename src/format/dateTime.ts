export const dateTimeStr = (date: Date) =>
  date.toLocaleDateString('en-GB', {
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

export const dateTimeExcelStr = (date: Date) => {
  const str = date.toLocaleDateString('en-GB', {
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

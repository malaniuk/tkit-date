import { D, H, M, S } from '../consts';

export const durationStr = (startDate: Date, endDate?: Date) => {
  const diff = +(endDate || new Date()) - +startDate;

  return [
    durDaysStr(diff),
    durHoursStr(diff),
    durMinutesStr(diff),
    durSecondsStr(diff),
  ].join(' ');
};

export const durDaysStr = (duration: number) => {
  const d = Math.floor(duration / D);

  return d ? `${d}d` : undefined;
};

export const durHoursStr = (duration: number) => {
  const h = Math.floor(duration / H) % 24;

  return h ? `${h}h` : undefined;
};

export const durMinutesStr = (duration: number) => {
  const m = Math.floor(duration / M) % 60;

  return m ? `${m}m` : undefined;
};

export const durSecondsStr = (duration: number) => {
  const s = Math.floor(duration / S) % 60;

  return s ? `${s}s` : undefined;
};

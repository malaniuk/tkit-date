import { D, H, M, S } from '../consts';

export const duration = (startDate: Date, endDate?: Date) => {
  const diff = +(endDate || new Date()) - +startDate;

  return [
    durDays(diff),
    durHours(diff),
    durMinutes(diff),
    durSeconds(diff),
  ].join(' ');
};

export const durDays = (duration: number) => {
  const d = Math.floor(duration / D);

  return d ? `${d}d` : undefined;
};

export const durHours = (duration: number) => {
  const h = Math.floor(duration / H) % 24;

  return h ? `${h}h` : undefined;
};

export const durMinutes = (duration: number) => {
  const m = Math.floor(duration / M) % 60;

  return m ? `${m}m` : undefined;
};

export const durSeconds = (duration: number) => {
  const s = Math.floor(duration / S) % 60;

  return s ? `${s}s` : undefined;
};

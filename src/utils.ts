export const dateToString = (date: Date | string): string =>
  date.toLocaleString().split(',')[0]

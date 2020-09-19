export const clone = (obj: unknown) => {
  return JSON.parse(JSON.stringify(obj));
};

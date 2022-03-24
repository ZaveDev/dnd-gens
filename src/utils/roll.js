export const roll4 = () => {
  return Math.floor(Math.random() * 4 + 1);
};

export const roll6 = () => {
  return Math.floor(Math.random() * 6 + 1);
};

export const roll8 = () => {
  return Math.floor(Math.random() * 8 + 1);
};

export const roll10 = () => {
  return Math.floor(Math.random() * 10 + 1);
};

export const roll12 = () => {
  return Math.floor(Math.random() * 12 + 1);
};

export const roll = () => {
  return Math.floor(Math.random() * 20 + 1);
};

export const roll100 = () => {
  const x = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let z = x[roll10()] + y[roll10()];
  if (z === 0) z = 100;
  return z;
};

export const repeat = (times, r) => {
  let t = 0;
  let res = 0;
  while (t < times) {
    res += r();
    t++;
  }
  return res;
};

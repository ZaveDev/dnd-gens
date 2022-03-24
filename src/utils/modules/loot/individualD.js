import { roll100, roll6, repeat } from "../../roll";
export const individualD = () => {
  const x = roll100();
  let res = {
    coins: {
      cp: 0,
      sp: 0,
      gp: 0,
      pp: 0,
    },
    items: [],
  };

  if (x >= 56) {
    res.coins.pp = repeat(2, roll6) * 100;
    res.coins.gp = roll6() * 1000;
  } else if (x >= 16) {
    res.coins.pp = roll6() * 100;
    res.coins.gp = roll6() * 1000;
  } else {
    res.coins.gp = repeat(8, roll6) * 100;
    res.coins.sp = repeat(2, roll6) * 1000;
  }

  return res;
};

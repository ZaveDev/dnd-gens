import { roll100, roll6, repeat } from "../../roll";
export const individualB = () => {
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

  if (x >= 96) {
    res.coins.pp = repeat(3, roll6);
    res.coins.gp = repeat(2, roll6) * 10;
  } else if (x >= 71) {
    res.coins.gp = repeat(4, roll6) * 10;
  } else if (x >= 61) {
    res.coins.gp = repeat(3, roll6) * 10;
  } else if (x >= 31) {
    res.coins.gp = repeat(2, roll6) * 10;
    res.coins.sp = repeat(6, roll6) * 10;
  } else {
    res.coins.cp = repeat(4, roll6) * 100;
    res.coins.sp = roll6() * 10;
  }
  return res;
};

import { roll100, roll6, repeat } from "../../roll";
export const individualC = () => {
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

  if (x >= 76) {
    res.coins.pp = repeat(2, roll6) * 10;
    res.coins.gp = repeat(2, roll6) * 100;
  } else if (x >= 36) {
    res.coins.pp = roll6() * 10;
    res.coins.gp = repeat(2, roll6) * 100;
  } else if (x >= 21) {
    res.coins.gp = repeat(2, roll6) * 100;
  } else {
    res.coins.gp = roll6() * 100;
    res.coins.sp = repeat(4, roll6) * 100;
  }

  return res;
};

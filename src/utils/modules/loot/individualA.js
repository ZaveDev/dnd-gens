import { roll100, roll6, repeat } from "../../roll";
export const individualA = () => {
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
    res.coins.pp = roll6();
  } else if (x >= 71) {
    res.coins.gp = repeat(3, roll6);
  } else if (x >= 61) {
    res.coins.sp = repeat(4, roll6);
  } else if (x >= 31) {
    res.coins.cp = repeat(5, roll6);
  } else {
    res.coins.cp = repeat(2, roll6);
  }

  return res;
};

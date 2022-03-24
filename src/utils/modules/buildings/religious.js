import { roll } from "../../roll";
export const religious = () => {
  let res;
  const x = roll();

  if (x >= 18) {
    res = "Hidden shrine to a fiend or an evil deity";
  } else if (x === 16 || x === 17) {
    res = "Library dedicated to religious study";
  } else if (x === 14 || x === 15) {
    res = "Abandoned shrine";
  } else if (x === 13) {
    res = "Home of ascetics";
  } else if (x === 11 || x === 12) {
    res = "Temple to a false deity (run by charlatan priests)";
  } else {
    res = "Temple to a good or neutral deity";
  }

  return res;
};

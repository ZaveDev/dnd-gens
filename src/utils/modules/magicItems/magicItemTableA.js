import { roll100 } from "../../roll";
export const magicItemTableA = () => {
  const x = roll100();
  let res;

  if (x === 100) {
    res = "Driftglobe";
  } else if (x === 99) {
    res = "Bag of holding ";
  } else if (x >= 95) {
    res = "Potion of greater healing";
  } else if (x >= 91) {
    res = "Spell scroll (2nd level)";
  } else if (x >= 71) {
    res = "Spell scroll (1st level)";
  } else if (x >= 61) {
    res = "Potion of climbing";
  } else if (x >= 51) {
    res = "Spell scroll (cantrip) ";
  } else {
    res = "Potion of healing";
  }

  return res;
};

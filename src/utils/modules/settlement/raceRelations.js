import { roll } from "../../roll";
export const raceRelations = () => {
  let res;
  const x = roll();

  if (x === 20) {
    res = "Racial minority oppresses majority";
  } else if (x === 19) {
    res = "Racial majority oppresses minority";
  } else if (x === 18) {
    res = "Racial minority are refugees";
  } else if (x === 17) {
    res = "Racial minority are rulers";
  } else if (x === 15 || x === 16) {
    res = "Racial majority are conquerors";
  } else if (x >= 11) {
    res = "Tension or rivalry";
  } else {
    res = "Harmony";
  }

  return res;
};

import { roll } from "../../roll";
export const tavern = () => {
  let res;
  const x = roll();

  if (x === 19 || x === 20) {
    res = "Brothel";
  } else if (x === 18) {
    res = "Members-only club ";
  } else if (x === 16 || x === 17) {
    res = "Caters to specific race or guild";
  } else if (x === 14 || x === 15) {
    res = "Gambling den";
  } else if (x === 12 || x === 13) {
    res = "Upper-class dining club";
  } else if (x === 11) {
    res = "Gathering place for a secret society ";
  } else if (x === 10) {
    res = "Thieves' guild hangout";
  } else if (x >= 6) {
    res = "Raucous dive";
  } else {
    res = "Quiet, low-key bar ";
  }

  return res;
};

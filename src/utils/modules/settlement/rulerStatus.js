import { roll } from "../../roll";
export const rulerStatus = () => {
  let res;
  const x = roll();

  if (x === 19 || x === 20) {
    res = "Religious leader";
  } else if (x === 17 || x === 18) {
    res = "Iron-willed but respected";
  } else if (x === 16) {
    res = "On deathbed, claimants compete for power";
  } else if (x === 15) {
    res = "Doltish lout";
  } else if (x === 14) {
    res = "Cabal seized power openly";
  } else if (x === 13) {
    res = "Contested leadership, open fighting";
  } else if (x === 12) {
    res = "Mysterious, anonymous cabal";
  } else if (x === 11) {
    res = "Ruled or controlled by a powerful monster";
  } else if (x === 10) {
    res = "Illegitimate ruler, simmering civil war";
  } else if (x === 9) {
    res = "Weakling manipulated by others";
  } else if (x >= 6) {
    res = "Feared tyrant";
  } else {
    res = "Respected, fair, and just";
  }

  return res;
};

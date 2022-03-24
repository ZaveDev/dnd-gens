import { roll100 } from "../../roll";
export const magicItemTableD = () => {
  const x = roll100();
  let res;

  if (x === 100) {
    res = "Portable hole";
  } else if (x === 99) {
    res = "Bag of devouring";
  } else if (x >= 96) {
    res = "Nolzur's marvelous pigments ";
  } else if (x >= 93) {
    res = "Horseshoes of a zephyr ";
  } else if (x >= 88) {
    res = "Spell scroll (8th level) ";
  } else if (x >= 83) {
    res = "Potion of vitality";
  } else if (x >= 78) {
    res = "Potion of longevity";
  } else if (x >= 73) {
    res = "Potion of cloud giant strength ";
  } else if (x >= 68) {
    res = "Potion of flying";
  } else if (x >= 63) {
    res = "Oil of sharpness";
  } else if (x >= 58) {
    res = "Ammunition, +3";
  } else if (x >= 51) {
    res = "Spell scroll (7th level) ";
  } else if (x >= 41) {
    res = "Spell scroll (6th level) ";
  } else if (x >= 31) {
    res = "Potion of speed";
  } else if (x >= 21) {
    res = "Potion of invisibility ";
  } else {
    res = "Potion of supreme healing ";
  }

  return res;
};

import { roll100 } from "../../roll";
export const magicItemTableC = () => {
  const x = roll100();
  let res;

  if (x === 100) {
    res = "Sending stones";
  } else if (x === 99) {
    res = "Periapt of health";
  } else if (x === 98) {
    res = "Necklace of fireballs";
  } else if (x === 97) {
    res = "Horseshoes of speed ";
  } else if (x === 96) {
    res = "Heward's handy haversack ";
  } else if (x === 95) {
    res = " Folding boat";
  } else if (x === 94) {
    res = " Eyes of minute seeing ";
  } else if (x === 93) {
    res = " Decanter of endless water ";
  } else if (x === 92) {
    res = " Chime of opening";
  } else if (x >= 90) {
    res = " Bead of force";
  } else if (x >= 88) {
    res = " Bag of beans";
  } else if (x >= 85) {
    res = " Scroll of protection";
  } else if (x >= 82) {
    res = " Quaal's feather token";
  } else if (x >= 79) {
    res = " Potion of fire giant strength ";
  } else if (x >= 76) {
    res = "Oil of etherealness";
  } else if (x >= 73) {
    res = "Elixir of health";
  } else if (x >= 68) {
    res = "Spell scroll (5th level) ";
  } else if (x >= 63) {
    res = "Potion of mind reading ";
  } else if (x >= 58) {
    res = "Potion of invulnerability ";
  } else if (x >= 53) {
    res = "Potion of heroism";
  } else if (x >= 48) {
    res = "Potion of stone giant strength ";
  } else if (x >= 43) {
    res = "Potion of frost giant strength ";
  } else if (x >= 38) {
    res = "Potion of gaseous form ";
  } else if (x >= 33) {
    res = "Potion of diminution";
  } else if (x >= 28) {
    res = "Potion of clairvoyance";
  } else if (x >= 23) {
    res = "Ammunition, +2";
  } else if (x >= 16) {
    res = "Spell scroll (4th level) ";
  } else {
    res = "Potion of superior healing ";
  }

  return res;
};

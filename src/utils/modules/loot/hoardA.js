import { roll100, roll6, roll4, repeat } from "../../roll";
import {
  magicItemTableA,
  magicItemTableB,
  magicItemTableC,
  magicItemTableG,
  magicItemTableF,
} from "../magicItems";
export const hoardA = () => {
  const x = roll100();
  let res = {
    coins: {
      cp: repeat(6, roll6) * 100,
      sp: repeat(3, roll6) * 100,
      gp: repeat(2, roll6) * 10,
      pp: 0,
    },
    items: [],
  };

  if (x === 100) {
    res.items.push(`((${repeat(2, roll6)})) 50 gp gems`);
    res.items.push(magicItemTableG)();
  } else if (x >= 98) {
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects`);
    res.items.push(magicItemTableG)();
  } else if (x >= 93) {
    res.items.push(`(${repeat(2, roll6)}) 50 gp gems`);
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableF());
    }
  } else if (x >= 86) {
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects`);
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableF());
    }
  } else if (x >= 81) {
    res.items.push(`(${repeat(2, roll6)}) 50 gp gems`);
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableC());
    }
  } else if (x >= 79) {
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects`);
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableC());
    }
  } else if (x >= 76) {
    res.items.push(`(${repeat(2, roll6)}) 10 gp gems`);
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableC());
    }
  } else if (x >= 71) {
    res.items.push(`(${repeat(2, roll6)}) 50 gp gems`);
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableB());
    }
  } else if (x >= 66) {
    res.items.push(`(${repeat(2, roll4)}) 25 gp art`);
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableB());
    }
  } else if (x >= 61) {
    res.items.push(`(${repeat(2, roll6)}) 10 gp gems`);
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableB());
    }
  } else if (x >= 53) {
    res.items.push(`(${repeat(2, roll6)}) 50 gp gems`);
    let y = roll6();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableA());
    }
  } else if (x >= 45) {
    res.items.push(`(${repeat(2, roll4)}) 25 gp art`);
    let y = roll6();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableA());
    }
  } else if (x >= 37) {
    res.items.push(`(${repeat(2, roll6)}) 10 gp gems`);
    let y = roll6();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableA());
    }
  } else if (x >= 27) {
    res.items.push(`(${repeat(2, roll6)}) 50 gp gems`);
  } else if (x >= 17) {
    res.items.push(`(${repeat(2, roll4)}) 25 gp art`);
  } else if (x >= 7) {
    res.items.push(`(${repeat(2, roll6)}) 10 gp gems`);
  } else {
  }

  return res;
};

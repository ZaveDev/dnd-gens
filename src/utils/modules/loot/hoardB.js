import { roll100, roll6, roll4, repeat } from "../../roll";
import {
  magicItemTableH,
  magicItemTableG,
  magicItemTableF,
  magicItemTableD,
  magicItemTableC,
  magicItemTableB,
  magicItemTableA,
} from "../magicItems";

export const hoardB = () => {
  const x = roll100();
  let res = {
    coins: {
      cp: repeat(2, roll6) * 100,
      sp: repeat(2, roll6) * 1000,
      gp: repeat(6, roll6) * 100,
      pp: repeat(3, roll6) * 10,
    },
    items: [],
  };

  if (x === 100) {
    res.items.push(magicItemTableH);
    res.items.push(`(${repeat(2, roll4)}) 250 gp art objects`);
  } else if (x === 99) {
    res.items.push(magicItemTableH);
    res.items.push(`(${repeat(3, roll6)}) 100 gp gems`);
  } else if (x >= 97) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableG());
    }
    res.items.push(`(${repeat(2, roll4)}) 250 gp art objects `);
  } else if (x >= 95) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableG());
    }
    res.items.push(`(${repeat(3, roll6)}) 100 gp gems`);
  } else if (x >= 92) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableF());
    }
    res.items.push(`(${repeat(2, roll4)}) 250 gp art objects `);
  } else if (x >= 89) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableF());
    }
    res.items.push(`(${repeat(3, roll6)}) 100 gp gems`);
  } else if (x >= 85) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableF());
    }
    res.items.push(`(${repeat(3, roll6)}) 50 gp gems`);
  } else if (x >= 81) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableF());
    }
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects `);
  } else if (x === 80) {
    res.items.push(magicItemTableD());
    res.items.push(`(${repeat(2, roll4)}) 250 gp art objects `);
  } else if (x === 79) {
    res.items.push(magicItemTableD());
    res.items.push(`(${repeat(3, roll6)}) 100 gp gems`);
  } else if (x >= 77) {
    res.items.push(magicItemTableD());
    res.items.push(`(${repeat(3, roll6)}) 50 gp gems`);
  } else if (x >= 75) {
    res.items.push(magicItemTableD());
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects `);
  } else if (x >= 73) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableC());
    }
    res.items.push(`(${repeat(2, roll4)}) 250 gp art objects `);
  } else if (x >= 70) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableC());
    }
    res.items.push(`(${repeat(3, roll6)}) 100 gp gems`);
  } else if (x >= 67) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableC());
    }
    res.items.push(`(${repeat(3, roll6)}) 50 gp gems`);
  } else if (x >= 64) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableC());
    }
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects `);
  } else if (x >= 60) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableB());
    }
    res.items.push(`(${repeat(2, roll4)}) 250 gp art objects `);
  } else if (x >= 55) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableB());
    }
    res.items.push(`(${repeat(3, roll6)}) 100 gp gems`);
  } else if (x >= 50) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableB());
    }
    res.items.push(`(${repeat(3, roll6)}) 50 gp gems`);
  } else if (x >= 45) {
    let y = roll4();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableB());
    }
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects `);
  } else if (x >= 41) {
    let y = roll6();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableA());
    }
    res.items.push(`(${repeat(2, roll4)}) 250 gp art objects `);
  } else if (x >= 37) {
    let y = roll6();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableA());
    }
    res.items.push(`(${repeat(3, roll6)}) 100 gp gems`);
  } else if (x >= 33) {
    let y = roll6();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableA());
    }
    res.items.push(`(${repeat(3, roll6)}) 50 gp gems`);
  } else if (x >= 29) {
    let y = roll6();
    for (let i = 0; i < y; i++) {
      res.items.push(magicItemTableA());
    }
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects `);
  } else if (x >= 23) {
    res.items.push(`(${repeat(2, roll4)}) 250 gp art objects`);
  } else if (x >= 17) {
    res.items.push(`(${repeat(3, roll6)}) 100 gp gems`);
  } else if (x >= 11) {
    res.items.push(`(${repeat(3, roll6)}) 50 gp gems`);
  } else if (x >= 5) {
    res.items.push(`(${repeat(2, roll4)}) 25 gp art objects `);
  } else {
  }

  return res;
};

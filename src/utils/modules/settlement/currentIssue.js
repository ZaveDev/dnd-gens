import { roll } from "../../roll";
export const currentIssue = () => {
  const res = [
    "Suspected vampire infestation",
    "New cult seeks converts",
    "Important figure died (murder suspected)",
    "War between rival thieves' guilds",
    "Plague or famine (sparks riots)",
    "Plague or famine (sparks riots)",
    "Corrupt officials",
    "Marauding monsters",
    "Marauding monsters",
    "Powerful wizard has moved into town",
    "Economic depression (trade disrupted)",
    "Flooding",
    "Undead stirring in cemeteries",
    "Prophecy of doom",
    "Brink of war",
    "Internal strife (leads to anarchy)",
    "Besieged by enemies",
    "Scandal threatens powerful families",
    "Dungeon discovered (adventurers flock to town)",
    "Religious sects struggle for power",
  ];

  const x = roll() - 1;

  return res[x];
};

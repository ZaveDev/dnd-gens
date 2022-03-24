const titles = [
  "Common",
  "seeker",
  "Rough",
  "whirl",
  "Laughing",
  "snout",
  "Orb",
  "strike",
  "Amber",
  "snarl",
  "Crow",
  "strike",
  "Rune",
  "braid",
  "Still",
  "blade",
  "Hallowed",
  "sorrow",
  "Mild",
  "breath",
  "Fog",
  "forge",
  "Albilon",
  "Ginerisey",
  "Brichazac",
  "Lomadieu",
  "Bellevé",
  "Dudras",
  "Chanassard",
  "Ronchessac",
  "Chamillet",
  "Bougaitelet",
  "Hallow",
  "swift",
  "Sacred",
  "pelt",
  "Rapid",
  "claw",
  "Haze",
  "rider",
  "Shade",
  "grove",
  "Cold",
  "sprinter",
  "Wind",
  "dane",
  "Ash",
  "sorrow",
  "Humble",
  "cut",
  "Ash",
  "bluff",
  "Marble",
  "maw",
  "Bone",
  "flare",
  "Monster",
  "belly",
  "Truth",
  "belly",
  "Sacred",
  "more",
  "Dawn",
  "less",
  "Crest",
  "breeze",
  "Neredras",
  "Dumières",
  "Albimbert",
  "Cremeur",
  "Brichallard",
  "Béchalot",
  "Chabares",
  "Chauveron",
  "Rocheveron",
  "Vernize",
  "Bright",
  "doom",
  "Clan",
  "willow",
  "Wheat",
  "glow",
  "Terra",
  "rock",
  "Laughing",
  "roar",
  "Silver",
  "weaver",
  "Clear",
  "punch",
  "Shield",
  "trap",
  "Fore",
  "swift",
  "Soft",
  "gloom",
  "Tree",
  "lash",
  "Grand",
  "splitter",
  "Marble",
  "wing",
  "Sharp",
  "doom",
  "Terra",
  "spear",
  "Rambumoux",
  "Lauregnory",
  "Chanalet",
  "Broffet",
  "Cardaithier",
  "Chauvelet",
  "Astaseul",
  "Bizeveron",
  "Vernillard",
  "Croirral",
  "Wild",
  "force",
  "Frozen",
  "scribe",
  "War",
  "belly",
  "Mourn",
  "rock",
  "Smart",
  "reaper",
  "Sage",
  "punch",
  "Solid",
  "cut",
  "Peace",
  "scream",
  "Slate",
  "flayer",
  "Mist",
  "blood",
  "Winter",
  "wound",
  "Spirit",
  "scribe",
  "Iron",
  "grip",
  "Plain",
  "grove",
  "Keen",
  "stone",
  "Proud",
  "swift",
  "Marsh",
  "rider",
  "Nickle",
  "grain",
  "Master",
  "fang",
  "Spring",
  "bender",
  "Pale",
  "force",
  "Strong",
  "blaze",
  "Silent",
  "brace",
  "Dream",
  "reaver",
  "Fire",
  "crusher",
  "Stout",
  "spirit",
  "White",
  "moon",
  "Leaf",
  "slayer",
  "Frozen",
  "reaper",
  "Tarren",
  "cloud",
  "Mist",
  "eyes",
  "Échethier",
  "Vassezac",
  "Albinie",
  "Ginemoux",
  "Angegnac",
  "Gaimbert",
  "Lignichanteau",
  "Caste",
  "mont",
  "Vegné",
  "Bobeffet",
  "Mild",
  "strike",
  "Deep",
  "grain",
  "Nickle",
  "whisk",
  "Mourning",
  "snow",
  "Cragore",
  "Terra",
  "water",
  "Red",
  "shadow",
  "Rose",
  "run",
  "Hallow",
  "shadow",
  "Fern",
  "fang",
  "Cinder",
  "breaker",
  "Noble",
  "dane",
  "Dust",
  "seeker",
  "Cold",
  "blight",
  "Sky",
  "fire",
  "Mist",
  "binder",
  "Oat",
  "taker",
  "Ember",
  "shadow",
  "Mountain",
  "bane",
  "Shield",
  "gem",
  "Elf",
  "scribe",
  "Or",
  "barrow",
  "Blue",
  "bleeder",
  "Amber",
  "flayer",
  "Lone",
  "rider",
  "Steel",
  "pike",
  "Hell",
  "bough",
  "Long",
  "shard",
  "Tree",
  "shaper",
  "Noble",
  "strike",
  "Leaf",
  "water",
  "Wise",
  "keep",
  "Rose",
  "whisper",
  "Humble",
  "bringer",
  "Flame",
  "forge",
  "Belemont",

  "Pellelles",
  "Suvau",
  "Bobellon",
  "Jouvempes",
  "Montalli",
  "Bougaimoux",
  "Bonnenie",
  "Massoumbert",
  "Lignignon",
  "Feather",
  "swallow",
  "Cold",
  "cloud",
  "Iron",
  "cut",
  "Night",
  "wind",
  "War",
  "mane",
  "Meadow",
  "brace",
  "Flat",
  "watcher",
  "Swift",
  "brew",
  "Wise",
  "killer",
  "Light",
  "scream",
  "Wyvern",
  "seeker",
  "Cliff",
  "less",
  "Serpent",
  "brook",
  "Sky",
  "snow",
  "Stern",
  "shine",
  "Sharp",
  "blade",
  "Void",
  "bend",
  "Ocean",
  "cut",
  "Hydra",
  "breath",
  "Pride",
  "song",
  "War",
  "might",
  "Whisper",
  "crest",
  "Distant",
  "wind",
  "Wild",
  "whirl",
  "Four",
  "swallow",
  "Sky",
  "hunter",
  "Terra",
  "maul",
  "Saurmaw",
  "Fore",
  "bluff",
  "Skyshade",
  "Stormorb",
  "Mirth",
  "mantle",
  "Rose",
  "dreamer",
  "Shadow",
  "flaw",
  "Smart",
  "lash",
  "Glory",
  "weaver",
  "Cinder",
  "hell",
  "Distant",
  "fury",
  "Oat",
  "shine",
  "Leaf",
  "dream",
  "Whit",
  "watcher",

  "Wolf",
  "grain",
  "Wheat",
  "brow",
  "Rough",
  "dust",
  "Hard",
  "shout",
  "Dew",
  "bringer",
  "Regal",
  "helm",
  "Haven",
  "glow",
  "Proud",
  "follower",
  "Mourn",
  "moon",
  "Pellerelli",
  "Rochelieu",
  "Chauvempes",
  "Macherac",
  "Maignes",
  "Credieu",
  "Andilet",
  "Massouchanteau",
  "Alinac",
  "Lamogre",
  "Haze",
  "keep",
  "Haven",
  "doom",
  "Four",
  "spire",
  "War",
  "breaker",
  "Gore",
  "light",
  "Wood",
  "light",
  "Elf",
  "fire",
  "Rich",
  "shout",
  "Regal",
  "shade",
  "Keen",
  "follower",
  "Void",
  "reaper",
  "Fallen",
  "orb",
  "Honor",
  "horn",
  "Pride",
  "wood",
  "Flame",
  "shaper",
  "Amber",
  "flaw",
  "Marble",
  "whisper",
  "Boulder",
  "ward",
  "Tarren",
  "seeker",
  "Two",
  "axe",
  "Dusk",
  "bloom",
  "Void",
  "lash",
  "Proud",
  "chaser",
  "Hallowed",
  "chaser",
  "Suteuil",
  "Roqueze",
  "Macherral",
  "Astaril",
  "Cretillon",
  "Larmalart",
  "Ronchelieu",
  "Abordieu",
  "Cardaimtal",
  "Croillard",
  "Spring",
  "spell",
  "Wood",
  "flower",
  "Mirth",
  "horn",
  "Sage",
  "sun",
  "Claw",
  "root",
  "Oat",
  "crag",
  "Black",
  "mark",
  "Grass",
  "hammer",
  "Fallen",
  "winds",
  "Humble",
  "reaper",
  "Orb",
  "trap",
  "Haven",
  "ash",
  "Elf",
  "wind",
  "Autumn",
  "bow",
  "Young",
  "vigor",
  "Titan",
  "toe",
  "Rapid",
  "root",
  "Amber",
  "hide",
  "Molten",
  "tide",
  "Noble",
  "sprinter",
  "Barley",
  "jumper",
  "Mirth",
  "cleaver",
  "Elf",
  "breath",
  "Feather",
  "dreamer",
  "Master",
  "jumper",
  "Dusk",
  "stalker",
  "Dulles",
  "Andigre",
  "Mévouitré",
  "Ronchegnac",
  "Montanne",
  "Rochegné",
  "Larmallevé",
  "Vernifelon",
  "Rambugnon",
  "Virac",
  "Moltenore",
  "Ocean",
  "toe",
  "Flat",
  "strider",
  "Glory",
  "rock",
  "Stern",
  "guard",
  "Frozen",
  "dreamer",
  "Angebannes",
  "Gaillot",
  "Lamanie",
  "Pouinac",
  "Lamagnon",

  "Abonton",
  "Abilles",
  "Sufelon",
  "Larmanton",
  "Cardairel",
  "Ice",
  "hand",
  "Stone",
  "bender",
  "Snow",
  "scar",
  "Deep",
  "wing",
  "Noble",
  "drifter",
  "Crystal",
  "bone",
  "Feather",
  "brew",
  "Clan",
  "wing",
  "Amberore",
  "Thunder",
  "mourn",
  "Marble",
  "tail",
  "Tusk",
  "snarl",
  "Steel",
  "runner",
  "Ocean",
  "seeker",
  "Rain",
  "ward",
  "Mourning",
  "scribe",
  "Dragon",
  "cutter",
  "Hard",
  "arm",
  "Maignes",
  "Jouvessac",
  "Larmagnory",
  "Chabaffet",
  "Abiril",
  "Albizac",
  "Machenet",
  "Bronie",
  "Baratillon",
  "Limochanteau",
  "Montarac",
  "Mailon",
  "Verninne",
  "Massoullevé",
  "Gairil",
  "Lamadras",
  "Gaignory",
  "Sarramond",
  "Castedras",
  "Roquenet",
  "Rumble",
  "ash",
  "Deep",
  "woods",
  "Coven",
  "breath",
  "Cliff",
  "dane",
  "Spirit",
  "glade",
  "Claw",
  "arm",
  "Rough",
  "forest",
  "Nether",
  "steel",
  "Nickle",
  "brow",
  "Pyre",
  "follower",
  "Even",
  "bash",
  "Flat",
  "rider",
  "Amber",
  "whirl",
  "Saur",
  "flower",
  "Iron",
  "crag",
  "Rock",
  "cleaver",
  "Hammer",
  "peak",
  "Wood",
  "slayer",
  "Clan",
  "watcher",
  "Spirit",
  "shade",
  "Aboges",
  "Vassellon",
  "Kergagné",
  "Sutillon",
  "Angere",
  "Maillon",
  "Rambutré",
  "Lamachade",
  "Bizegnac",
  "Sauzin",
  "Maiveron",
  "Larmare",
  "Ronchefort",
  "Bougailet",
  "Lamazac",
  "Chanagny",
  "Rocheze",
  "Saintirral",
  "Raurisey",
  "Abobannes",
  "Thunder",
  "shade",
  "Honor",
  "chaser",
  "Earth",
  "sorrow",
  "Stone",
  "singer",
  "Two",
  "reaver",
  "Great",
  "flare",
  "Keen",
  "brooke",
  "Rambumoux",
  "Sutillon",
  "Albelles",
  "Roffinie",
  "Roffivilliers",
  "Jouvelot",
  "Bromoux",
  "Ravilart",
  "Béchalenet",
  "Saintizin",

  "Three",
  "caller",
  "Lightning",
  "caller",
  "Duranton",
  "Cremond",
  "Lomameur",
  "Abissac",
  "Vellard",
  "Pezin",
  "Chavameur",
  "Jouveffet",
  "Roquethier",
  "Échellane",
  "Sacred",
  "ward",
  "Tusk",
  "hunter",
  "Red",
  "brace",
  "Stone",
  "chaser",
  "Low",
  "light",
  "Shadow",
  "steam",
  "Pine",
  "brew",
  "Fore",
  "breeze",
  "Burning",
  "shard",
  "Black",
  "spear",
  "Three",
  "snarl",
  "Falleng",
  "loom",
  "Vernivau",
  "Roquellevé",
  "Bizegnac",
  "Châtithier",
  "Montanie",
  "Brognac",
  "Albeleilles",
  "Rare",
  "Peteuil",
  "Nereffet",
  "Autumn",
  "spell",
  "Tall",
  "fist",
  "Coven",
  "hunter",
  "Grass",
  "less",
  "Dusk",
  "seeker",
  "Four",
  "shot",
  "War",
  "ripper",
  "Phoenixg",
  "lade",
  "Amber",
  "dew",
  "Serpent",
  "soar",
  "Pyre",
  "brace",
  "Truth",
  "spark",
  "Winter",
  "spire",
  "Even",
  "steel",
  "Alpen",
  "sorrow",
  "Dust",
  "spire",
  "Raven",
  "trapper",
  "Flame",
  "brooke",
  "Iron",
  "belly",
  "Serpent",
  "gazer",
  "Dragon",
  "helm",
  "Wolf",
  "tide",
  "Snow",
  "hell",
  "Sauvau",
  "Barassard",
  "Nossec",
  "Polassard",
  "Lignifelon",
  "Alillon",
  "Gaivès",
  "Caffamoux",
  "Cardailenet",
  "Montalot",
  "Rage",
  "sworn",
  "Sky",
  "dancer",
  "Iron",
  "bender",
  "Wild",
  "brook",
  "Mourning",
  "steel",
  "Stagmane",
  "Glory",
  "forge",
  "Titan",
  "water",
  "Soft",
  "eyes",
  "Hammer",
  "sky",
  "Hell",
  "flame",
  "Raven",
  "fury",
  "Gore",
  "dane",
  "Alibannes",
  "Abaril",
  "Neredras",
  "Béchaveron",
  "Machelenet",
  "Lamathier",
  "Larmasseau",
  "Caffallane",
  "Laurenas",
  "Nereffet",
  "Wooden",
  "glory",
  "Low",
  "bringer",
  "Saur",
  "brooke",
  "Battle",
  "strength",
  "Willow",
  "woods",
  "Axe",
  "dust",
  "Ash",
  "stalker",
  "Swift",
  "steel",
  "Raven",
  "singer",
  "Gore",
  "flower",
];

export const title = () => {
  let res;
  const l = titles.length;
  const roll = () => {
    return Math.floor(Math.random() * l);
  };
  const x = titles[roll()];
  const y = titles[roll()].toLowerCase();

  const str = `${x}${y}`;

  res = str.charAt(0).toUpperCase() + str.slice(1);

  return res;
};

export type Animal = {
  id: string;
  name: string;
  type: "mammal" | "bird" | "reptile" | "fish" | "amphibian";
  description: string;
};

export const animals: Animal[] = [
  {
    id: "lion",
    name: "Lion",
    type: "mammal",
    description: "The king of the jungle, known for its majestic mane"
  },
  {
    id: "elephant",
    name: "Elephant",
    type: "mammal",
    description: "Largest land animal, known for intelligence and memory"
  },
  {
    id: "penguin",
    name: "Penguin",
    type: "bird",
    description: "Flightless bird adapted to life in cold waters"
  },
  {
    id: "giraffe",
    name: "Giraffe",
    type: "mammal",
    description: "Tallest land animal with distinctive spotted coat"
  },
  {
    id: "tiger",
    name: "Tiger",
    type: "mammal",
    description: "Largest of all wild cats, powerful predator"
  },
  {
    id: "dolphin",
    name: "Dolphin",
    type: "mammal",

    description: "Highly intelligent marine mammal"
  },
  {
    id: "eagle",
    name: "Eagle",
    type: "bird",

    description: "Large bird of prey with excellent eyesight"
  },
  {
    id: "panda",
    name: "Giant Panda",
    type: "mammal",

    description: "Black and white bear native to China"
  },
  {
    id: "kangaroo",
    name: "Kangaroo",
    type: "mammal",

    description: "Marsupial known for powerful legs and jumping"
  },
  {
    id: "owl",
    name: "Owl",
    type: "bird",

    description: "Nocturnal bird of prey with rotating head"
  },
  {
    id: "cheetah",
    name: "Cheetah",
    type: "mammal",

    description: "Fastest land animal, built for speed"
  },
  {
    id: "peacock",
    name: "Peacock",
    type: "bird",

    description: "Known for its colorful display of feathers"
  },
  {
    id: "koala",
    name: "Koala",
    type: "mammal",

    description: "Tree-dwelling marsupial native to Australia"
  },
  {
    id: "octopus",
    name: "Octopus",
    type: "fish",

    description: "Intelligent sea creature with eight arms"
  },
  {
    id: "crocodile",
    name: "Crocodile",
    type: "reptile",

    description: "Large aquatic reptile and fearsome predator"
  }
];

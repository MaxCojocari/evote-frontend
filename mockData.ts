import { Election } from "./types/types";

export const elections = [
  {
    id: "ab0ded4b-9151-46b1-85a4-0317ca2b407f",
    description: "Alegeri prezidențiale",
    img: "chisinau.jpeg",
    choices: [
      { id: "1", description: "Helena Reeze", img: "helena_reeze.jpeg" },
      { id: "2", description: "Jessica Karter", img: "jessica_karter.jpeg" },
        { id: "3", description: "Dan Colins", img: "dan_colins.jpeg" },
        { id: "4", description: "John Rickman", img: "john_rickman.jpeg" },
    ],
  },
  {
    id: "f427b9b9-2def-4d6f-bcfa-9f209df28dfb",
    description: "Alegeri municipale",
    img: "balti.jpeg",
    choices: [
      { id: "1", description: "Helena Reeze", img: "helena_reeze.jpeg" },
      { id: "2", description: "Jessica Karter", img: "jessica_karter.jpeg" },
      { id: "3", description: "Dan Colins", img: "dan_colins.jpeg" },
      { id: "4", description: "John Rickman", img: "john_rickman.jpeg" },
    ],
  },
] as Election[];

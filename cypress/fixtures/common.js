import { faker } from "@faker-js/faker";

export const User = Object.freeze({
  validUser: {
    username: faker.name.fullName(),
    password: faker.internet.password(8, true, /[A-Z]/),
  },
  invalidUser: {
    username: faker.name.fullName().replace(/./, "*"),
    password: faker.internet.password(8, true, /[A-Z]/),
  },
});

export const Recipe = Object.freeze({
  vegetableSoup: "Vegetable Soup",
});

export const SortOptions = Object.freeze({
  relevance: "Relevance",
  newest: "Newest",
  name: "Name",
  totalTime: "Total time, shortest",
  prepTime: "Prep. time, shortest",
  bestRated: "Best rated",
});

export const Difficulty = Object.freeze({
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
});

export const Section = Object.freeze({
  ingredients: "Ingredients",
  nutrition: "Nutrition",
});

export const SearchContext = Object.freeze({
  recipes: "Recipes",
  collections: "Collections",
  articles: "Articles",
});

export const Collection = Object.freeze({
  breakfast: "Breakfast",
  vegetarian: "Vegetarian",
});

export const Article = Object.freeze({
  inspiration: "Inspiration",
  tips: "Tips",
});

export const Language = Object.freeze({
  english: "English",
  german: "German",
  french: "French",
  spanish: "Spanish",
  italian: "Italian",
  dutch: "Dutch",
});

export const Country = Object.freeze({
  unitedKingdom: "United Kingdom",
  germany: "Germany",
  france: "France",
  spain: "Spain",
  italy: "Italy",
  netherlands: "Netherlands",
});
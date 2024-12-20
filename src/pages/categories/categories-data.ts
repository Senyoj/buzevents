// src/pages/categories/categories-data.ts
export interface Category {
  id: string;
  title: string;
  image: string;
  location: string;
  count?: number;
  description?: string;
}

export const categories: Category[] = [
  {
    id: "1",
    title: "Music",
    image: "/card.png",
    location: "Greater Accra, Ghana",
    description: "Discover the best events in your area and online",
  },
  {
    id: "2",
    title: "NightLife",
    image: "/card1.png",
    location: "Greater Accra, Ghana",
    description: "Sports events, tournaments, and fitness activities",
  },
  {
    id: "3",
    title: "Performing & Visual Arts",
    image: "/card2.png",
    location: "Greater Accra, Ghana",
    description: "Food festivals, culinary events, and dining experiences",
  },
  {
    id: "4",
    title: "Holidays",
    image: "/card3.png",
    location: "Greater Accra, Ghana",
    description: "Art exhibitions, theatre shows, and cultural events",
  },
  {
    id: "5",
    title: "Dating",
    image: "/card4.png",
    location: "Greater Accra, Ghana",
    description: "Tech conferences, workshops, and meetups",
  },
  {
    id: "6",
    title: "Hobbies",
    image: "/card5.png",
    location: "Greater Accra, Ghana",
    description: "Business conferences, networking events, and seminars",
  },
  {
    id: "7",
    title: "Business",
    image: "/card6.png",
    location: "Greater Accra, Ghana",
    description: "Business conferences, networking events, and seminars",
  },
  {
    id: "8",
    title: "Food & Drink",
    image: "/card7.png",
    location: "Greater Accra, Ghana",
    description: "Business conferences, networking events, and seminars",
  },
];

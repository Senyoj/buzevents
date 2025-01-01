export interface Category {
  id: string;
  title: string;
  image: string;
  count?: number;
  description?: string;
}

export const categories: Category[] = [
  {
    id: "1",
    title: "Music & Concerts",
    image: "/images/categories/music.jpg",
    count: 156,
    description: "Live performances, concerts, and musical events",
  },
  {
    id: "2",
    title: "Sports & Fitness",
    image: "/images/categories/sports.jpg",
    count: 89,
    description: "Sports events, tournaments, and fitness activities",
  },
  {
    id: "3",
    title: "Food & Dining",
    image: "/images/categories/food.jpg",
    count: 204,
    description: "Food festivals, culinary events, and dining experiences",
  },
  {
    id: "4",
    title: "Arts & Theatre",
    image: "/images/categories/arts.jpg",
    count: 127,
    description: "Art exhibitions, theatre shows, and cultural events",
  },
  {
    id: "5",
    title: "Technology",
    image: "/images/categories/tech.jpg",
    count: 95,
    description: "Tech conferences, workshops, and meetups",
  },
  {
    id: "6",
    title: "Business",
    image: "/images/categories/business.jpg",
    count: 167,
    description: "Business conferences, networking events, and seminars",
  },
];

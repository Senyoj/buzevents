export interface Location {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export const locations: Location[] = [
  {
    id: "1",
    title: "New York City, New York",
    image: "/src/assets/images/nyc.jpg",
    description:
      "Known for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty.",
  },
  {
    id: "2",
    title: "Los Angeles, California",
    image: "/src/assets/images/la.jpg",
    description:
      "LA is a diverse sprawl of neighborhoods, but locals know there are tons of things to do. Wellness enthusiasts can take a yoga class, join a group meditation, or learn about Ayurveda. DIYers can make ramen or brew beer. Shoppers should swing by the various flea markets while cocktail lovers can mix up their own concoctions. Take your outings to the next level with these Los Angeles events.",
  },
  {
    id: "3",
    title: "Las Vegas, Nevada",
    image: "/src/assets/images/lv.jpg",
    description:
      "Famous for its vibrant nightlife, casinos, and entertainment shows.",
  },
  {
    id: "4",
    title: "Orlando, Florida",
    image: "/src/assets/images/Orlando.jpg",
    description:
      "A family-friendly destination known for its theme parks like Disney World and Universal Studios.",
  },
  {
    id: "5",
    title: "San Francisco, California",
    image: "/src/assets/images/sf.jpg",
    description:
      "Famed for the Golden Gate Bridge, Alcatraz Island, and its unique cultural vibe.",
  },
  {
    id: "6",
    title: "Chicago, Illinois",
    image: "/src/assets/images/Chicago.jpg",
    description:
      "Living in Chicago means there’s always a new cultural, food, or comedy event. Get your laugh on at a famous comedy club or take in the architecture cruising the Chicago River. Explore the underground at a secret food tour, an art gallery pop-up, or a drag show. Check out the dining scene at a pizza pop-up or a beer festival. Take your outings to the next level with these Chicago events.",
  },
];

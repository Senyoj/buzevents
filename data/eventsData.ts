// eventsdata.ts
export interface Event {
  id: string;
  title: string;
  image: string;
  discount?: {
    percentage: number;
    isActive: boolean;
  };
  host: {
    name: string;
    initials: string;
    followers: number;
  };
  date: {
    day: string;
    time: string;
  };
  ticket: {
    startingPrice: number;
  };
}

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Reflect, Recharge, and Reimagine: Strategize for Success",
    image: "/event1.png",
    discount: {
      percentage: 15,
      isActive: true,
    },
    host: {
      name: "Nakeicha Wilson",
      initials: "NM",
      followers: 98,
    },
    date: {
      day: "Sat, Dec 7, 2024",
      time: "3:00 PM GMT",
    },
    ticket: {
      startingPrice: 60.0,
    },
  },
  {
    id: "2",
    title: "Leadership Summit 2024: Transform Your Vision",
    image: "/event2.png",
    discount: {
      percentage: 20,
      isActive: true,
    },
    host: {
      name: "James Smith",
      initials: "JS",
      followers: 156,
    },
    date: {
      day: "Sun, Dec 15, 2024",
      time: "2:00 PM GMT",
    },
    ticket: {
      startingPrice: 75.0,
    },
  },
  {
    id: "3",
    title: "Leadership Summit 2024: Transform Your Vision",
    image: "/event2.png",
    discount: {
      percentage: 20,
      isActive: true,
    },
    host: {
      name: "James Smith",
      initials: "JS",
      followers: 156,
    },
    date: {
      day: "Sun, Dec 15, 2024",
      time: "2:00 PM GMT",
    },
    ticket: {
      startingPrice: 75.0,
    },
  },
  {
    id: "4",
    title: "Leadership Summit 2024: Transform Your Vision",
    image: "/event2.png",
    discount: {
      percentage: 20,
      isActive: true,
    },
    host: {
      name: "James Smith",
      initials: "JS",
      followers: 156,
    },
    date: {
      day: "Sun, Dec 15, 2024",
      time: "2:00 PM GMT",
    },
    ticket: {
      startingPrice: 75.0,
    },
  },
];

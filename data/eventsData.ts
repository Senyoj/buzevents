interface Host {
  name: string;
  initials: string;
  followers: number;
}

interface Ticket {
  startingPrice: number;
}

interface Discount {
  percentage: number;
  isActive: boolean;
}

interface DateDetails {
  day: string;
  time: string;
}

// Define the Event interface
export interface Event {
  id: string;
  title: string;
  image: string;
  discount?: Discount; // Optional field since not all events have a discount
  host: Host;
  date: DateDetails;
  ticket: Ticket;
}
export const eventsData: Event[] = [
  {
    id: "1",
    title: "Reflect, Recharge, and Reimagine: Strategize for Success",
    image: "/event1.png", // Assuming image is passed directly here
    discount: {
      percentage: 15,
      isActive: true,
    },
    host: {
      name: "Nakeicha Wilson",
      initials: "NW",
      followers: 120,
    },
    date: {
      day: "Sat, Dec 7, 2024",
      time: "3:00 PM GMT",
    },
    ticket: {
      startingPrice: 50.0,
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
      followers: 200,
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
    title: "Breaking Barriers: Empowerment Workshop",
    image: "/event3.png",
    discount: {
      percentage: 10,
      isActive: true,
    },
    host: {
      name: "Sophia Johnson",
      initials: "SJ",
      followers: 150,
    },
    date: {
      day: "Wed, Jan 10, 2025",
      time: "5:00 PM GMT",
    },
    ticket: {
      startingPrice: 40.0,
    },
  },
  {
    id: "4",
    title: "Innovate Now: The Future of Technology",
    image: "/event4.png",
    discount: {
      percentage: 25,
      isActive: true,
    },
    host: {
      name: "Elon Matthews",
      initials: "EM",
      followers: 300,
    },
    date: {
      day: "Fri, Jan 20, 2025",
      time: "4:00 PM GMT",
    },
    ticket: {
      startingPrice: 100.0,
    },
  },
  {
    id: "5",
    title: "Health and Wellness Expo 2025",
    image: "/event5.png",
    host: {
      name: "Karen Bell",
      initials: "KB",
      followers: 75,
    },
    date: {
      day: "Sat, Feb 5, 2025",
      time: "10:00 AM GMT",
    },
    ticket: {
      startingPrice: 30.0,
    },
  },
  {
    id: "6",
    title: "The Art of Collaboration: Team Building Workshop",
    image: "/event6.png",
    discount: {
      percentage: 5,
      isActive: true,
    },
    host: {
      name: "Michael Brown",
      initials: "MB",
      followers: 180,
    },
    date: {
      day: "Mon, Feb 12, 2025",
      time: "11:00 AM GMT",
    },
    ticket: {
      startingPrice: 55.0,
    },
  },
  {
    id: "7",
    title: "Start-Up Success: Pitch and Launch",
    image: "/event7.png",
    host: {
      name: "Jessica Taylor",
      initials: "JT",
      followers: 240,
    },
    date: {
      day: "Thu, Feb 22, 2025",
      time: "6:00 PM GMT",
    },
    ticket: {
      startingPrice: 80.0,
    },
  },
  {
    id: "8",
    title: "Cultural Fusion: A Celebration of Diversity",
    image: "/event8.png",
    discount: {
      percentage: 30,
      isActive: true,
    },
    host: {
      name: "Liam O'Connor",
      initials: "LO",
      followers: 95,
    },
    date: {
      day: "Sun, Mar 1, 2025",
      time: "2:00 PM GMT",
    },
    ticket: {
      startingPrice: 20.0,
    },
  },
];

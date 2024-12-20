import PageLayout from "../../components/Layout/PageLayout";
import SearchBar from "../../components/SearchBar";
import CategoryCard from "./components/CategoryCard";

interface Category {
  id: string;
  title: string;
  image: string;
  count?: number;
  description?: string;
}

const Home = () => {
  const categories: Category[] = [
    {
      id: "1",
      title: "Music",
      image: "/card.png",
      count: 156,
      description: "Live performances, concerts, and musical events",
    },
    {
      id: "2",
      title: "NightLife",
      image: "/card1.png",
      count: 89,
      description: "Sports events, tournaments, and fitness activities",
    },
    {
      id: "3",
      title: "Performing & Visual Arts",
      image: "/card2.png",
      count: 204,
      description: "Food festivals, culinary events, and dining experiences",
    },
    {
      id: "4",
      title: "Holidays",
      image: "/card3.png",
      count: 127,
      description: "Art exhibitions, theatre shows, and cultural events",
    },
    {
      id: "5",
      title: "Dating",
      image: "/card4.png",
      count: 95,
      description: "Tech conferences, workshops, and meetups",
    },
    {
      id: "6",
      title: "Hobbies",
      image: "/card5.png",
      count: 167,
      description: "Business conferences, networking events, and seminars",
    },
    {
      id: "7",
      title: "Business",
      image: "/card6.png",
      count: 167,
      description: "Business conferences, networking events, and seminars",
    },
    {
      id: "8",
      title: "Food & Drink",
      image: "/card7.png",
      count: 167,
      description: "Business conferences, networking events, and seminars",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="text-center p-6 md:p-10 lg:mx-44">
        <div className="min-h-[600px] flex justify-center items-center">
          <div>
            <h1 className="font-bold font-bricolage-grotesque-primary text-center text-4xl md:text-5xl lg:text-6xl text-textColor">
              Discover <span className=""> Amazing Events </span> <br />
              Near You
            </h1>
            <p className="text-xl md:text-2xl font-normal text-center py-5 px-4">
              Unlock unforgettable experiences. From concerts to conferences,{" "}
              <br className="hidden md:block" />
              find your next adventure with just a few clicks.
            </p>

            <div className="my-5 flex justify-center items-center px-4">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Title Section */}
          <div className="w-full lg:w-1/3 flex items-start">
            <h1
              className="font-bricolage-grotesque-primary text-textColor 
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                       font-bold text-center lg:text-start leading-tight"
            >
              Explore Our <span className="block sm:inline">Categories</span>
            </h1>
          </div>

          {/* Cards Grid Section */}
          <div className="w-full lg:w-2/3">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 
                           gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center"
            >
              {categories.map((category) => (
                <div key={category.id} className="w-full">
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;

import { Carousel } from "antd";
import { eventsData } from "../../../data/eventsData";
import EventCard from "../../components/EventCards";
import PageLayout from "../../components/Layout/PageLayout";
import SearchBar from "../../components/SearchBar";
import { categories } from "../categories/categories-data";
import CategoryCard from "../categories/components/CategoryCard";

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="text-center p-6 md:p-10 lg:mx-44">
        <div className="min-h-screen md:min-h-[600px] flex justify-center items-center">
          <div>
            <h1 className="font-bold text-center text-4xl md:text-5xl lg:text-6xl text-textColor">
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
              Explore Our <span className=" sm:inline">Categories</span>
            </h1>
          </div>

          {/* Cards Grid Section */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
              {categories.map((category) => (
                <div key={category.id} className="w-full">
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1></h1>
          <h1
            className="font-bricolage-grotesque-primary text-textColor 
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                       font-bold lg:text-start leading-tight py-10 w-full lg:w-1/"
          >
            Buy <span className=" sm:inline">tickets </span>with
            <span className=" sm:inline"> Ease</span>
          </h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Carousel className=" col-span-4">
              {eventsData.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  // onLike={handleLike}
                  // onBookmark={handleBookmark}
                  // onBuyTicket={handleBuyTicket}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;

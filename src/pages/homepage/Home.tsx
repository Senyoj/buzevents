import { useState } from "react";
import { eventsData } from "../../../data/eventsData";
import EventCard from "../../components/EventCards";
import PageLayout from "../../components/Layout/PageLayout";
import { Pagination, Tag } from "antd";
import CarouselSection from "./components/CarouselSection";
import SearchFilter from "../../components/SearchFilter";
import SearchPage from "./components/SearchPage";
import CategoryCard from "../categories/components/CategoryCard";
import { categories } from "../categories/categories-data";
import PopularLocationsCarousel from "./components/PopularLocationsCarousel";

const interests = [
  "Comedy",
  "Food",
  "Education",
  "Pop",
  "Design",
  "R&B",
  "Hip Hop / Rap",
  "Film",
  "Personal Health",
  "Blues & Jazz",
  "Travel",
  "Yoga",
  "Country",
  "Startups & Small Business",
  "Classical",
  "Mental Health",
  "TV",
  "Musical",
];

const ITEMS_PER_PAGE = 4;

const Home = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "Education",
    "Mental Health",
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const paginatedEvents = eventsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <PageLayout>
      <div className="text-center p-6 md:p-10 lg:mx-44">
        <div className="min-h-[400px] flex justify-center items-center">
          <div>
            <h1 className="font-bold text-center text-4xl md:text-5xl lg:text-6xl text-textColor">
              Discover <span> Amazing Events </span> <br /> Near You
            </h1>
            <p className="text-xl md:text-2xl font-normal text-center py-5 px-4">
              Unlock unforgettable experiences. From concerts to conferences,{" "}
              <br className="hidden md:block" />
              find your next adventure with just a few clicks.
            </p>
            <div>
              <SearchPage />{" "}
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

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <SearchFilter />
        <CarouselSection filteredEvents={eventsData} />
      </section>

      {/* Interests Section */}
      <section className="px-4 sm:mx-6 lg:px-8 bg-border rounded-md py-10 mt-20">
        <div className="py-10">
          <h2>
            <span>Personalize</span> Your Feeds
          </h2>
          <p>
            Select your interests to get event suggestions based on what you
            love.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Tag
              key={interest}
              color={selectedTags.includes(interest) ? "purple" : "default"}
              onClick={() => toggleTag(interest)}
              className="cursor-pointer px-4 py-1 rounded-full"
              style={{
                borderColor: selectedTags.includes(interest)
                  ? "purple"
                  : "#d9d9d9",
              }}
            >
              {selectedTags.includes(interest)
                ? `✔ ${interest}`
                : `+ ${interest}`}
            </Tag>
          ))}
        </div>
      </section>

      {/* More Events Section */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="py-5">
          <h2>More events</h2>
        </div>
        <div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {paginatedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage}
              onChange={setCurrentPage}
              total={eventsData.length}
              pageSize={ITEMS_PER_PAGE}
              hideOnSinglePage
            />
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <PopularLocationsCarousel />
      </section>
    </PageLayout>
  );
};

export default Home;

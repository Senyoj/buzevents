import { useState } from "react";
import { eventsData } from "../../../data/eventsData";
import EventCard from "../../components/EventCards";
import PageLayout from "../../components/Layout/PageLayout";
import { Pagination, Tag } from "antd";
import CarouselSection from "./components/CarouselSection";
import SearchFilter from "../../components/SearchFilter";
import SearchPage from "./components/SearchPage";

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
] as const;

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
    </PageLayout>
  );
};

export default Home;

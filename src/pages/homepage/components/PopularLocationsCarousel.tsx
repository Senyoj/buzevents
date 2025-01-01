import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "antd";
import { locations, Location } from "../../../../data/locationsData";
import { useNavigate } from "react-router-dom";

const LocationCard = ({ location }: { location: Location }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/location/${location.id}`);
  };

  return (
    <Card
      className="h-full cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={location.image}
          alt={location.title}
          className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-sm"></div>
      </div>
      <h1 className="text-lg mt-4">{location.title}</h1>
    </Card>
  );
};

const PopularLocationsCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [slidesPerView, setSlidesPerView] = React.useState(4);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = locations.length - slidesPerView;

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const slideWidth = 100 / slidesPerView;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Popular Destinations</h1>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlide >= maxSlides}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-in-out px-2"
          style={{
            transform: `translateX(-${currentSlide * slideWidth}%)`,
          }}
        >
          {locations.map((item) => (
            <div
              key={item.id}
              className="flex-none px-2"
              style={{ width: `${slideWidth}%` }}
            >
              <LocationCard location={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularLocationsCarousel;

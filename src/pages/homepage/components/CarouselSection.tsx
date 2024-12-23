import { useRef } from "react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "../../../components/EventCards";

interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  isOnline: boolean;
  price?: number;
  imageUrl?: string;
  category?: string;
  description?: string;
}

interface CarouselSectionProps {
  filteredEvents: Event[];
}

interface CarouselSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  }>;
}

const CarouselSection = ({ filteredEvents }: CarouselSectionProps) => {
  const carouselRef = useRef<CarouselRef>(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const settings: CarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-bricolage-grotesque-primary text-textColor text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Buy <span className="sm:inline">tickets </span>with
            <span className="sm:inline"> Ease</span>
          </h1>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
              type="button"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
              type="button"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="carousel-container relative">
          <Carousel ref={carouselRef} {...settings}>
            {filteredEvents.map((event) => (
              <div key={event.id} className="px-2">
                <EventCard event={event} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;

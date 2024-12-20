import { useState } from "react";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { CalendarDays, Ticket } from "lucide-react";
import type { Event } from "../../data/eventsData";

interface EventCardProps {
  event: Event;
  onLike?: (eventId: string) => void;
  onBookmark?: (eventId: string) => void;
  onBuyTicket?: (eventId: string) => void;
}

const EventCard = ({
  event,
  onLike,
  onBookmark,
  onBuyTicket,
}: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-primary">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-56 object-cover"
        />

        {event.discount?.isActive && (
          <div className="absolute top-4 right-4 bg-opacity-60 text-primary bg-textColor backdrop-blur-xl py-1 px-3 rounded-lg text-lg font-semibold">
            {event.discount.percentage}% Off
          </div>
        )}

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute bottom-0 w-full flex items-center justify-between p-2 pt-10 bg-gradient-to-t from-textColor to-[#00000004]"
        >
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-primary line-clamp-2">
              {event.title}
            </h2>
          </div>

          <div
            className={`flex gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={() => onLike?.(event.id)}
              className="w-10 h-10 rounded-full bg-primary flex justify-center items-center hover:bg-opacity-90"
            >
              <FaHeart size={20} />
            </button>
            <button
              onClick={() => onBookmark?.(event.id)}
              className="w-10 h-10 rounded-full bg-primary flex justify-center items-center hover:bg-opacity-90"
            >
              <FaBookmark size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 rounded-full bg-textColor text-primary font-semibold text-lg flex justify-center items-center">
            {event.host.initials}
          </div>
          <div>
            <p className="text-gray-600">{event.host.name}</p>
            <p className="text-sm">
              Event Host • {event.host.followers} Followers
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2">
            <CalendarDays />
            <div>
              <p className="">{event.date.day}</p>
              <p className="text-sm">{event.date.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Ticket />
            <div>
              <p className="">Ticket</p>
              <p className="text-sm font-semibold">
                From ${event.ticket.startingPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => onBuyTicket?.(event.id)}
            className="bg-textColor w-full text-primary py-2 px-4 rounded-lg font-semibold hover:bg-primary hover:border hover:text-textColor transition"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

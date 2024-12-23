import { useState, useRef, useEffect } from "react";
import { FaCalendar, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { Card, DatePicker, Select, Space, Row, Col } from "antd";
import SearchBar from "../../../components/SearchBar";
import { eventsData } from "../../../../data/eventsData";
import EventCard from "../../../components/EventCards";

const { Option } = Select;

const SearchPage = () => {
  const paginatedEvents = eventsData.slice();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div>
      <div>
        <div className="my-5 flex justify-center items-center px-4">
          <button
            onClick={toggleSearch}
            className="border border-border rounded-full flex items-center justify-center bg-primary h-12 w-full hover:bg-primary/90 transition-colors"
          >
            <SearchBar />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto backdrop-blur-sm transition-all">
          <div className="min-h-screen pt-20 px-4 pb-4">
            <div
              ref={modalRef}
              className="w-full h-max bg-white rounded-xl shadow-2xl transform transition-all"
            >
              <Card className="border-0 shadow-none">
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <SearchBar />
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={8}>
                      <DatePicker
                        style={{ width: "100%" }}
                        placeholder="Select date"
                        prefix={<FaCalendar />}
                        className="h-10"
                      />
                    </Col>
                    <Col xs={24} sm={8}>
                      <Select
                        style={{ width: "100%" }}
                        placeholder="Select location"
                        suffixIcon={<FaMapMarkerAlt />}
                        className="h-10"
                      >
                        <Option value="new-york">New York</Option>
                        <Option value="london">London</Option>
                        <Option value="tokyo">Tokyo</Option>
                      </Select>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Select
                        style={{ width: "100%" }}
                        placeholder="Event category"
                        suffixIcon={<FaTag />}
                        className="h-10"
                      >
                        <Option value="music">Music</Option>
                        <Option value="sports">Sports</Option>
                        <Option value="arts">Arts</Option>
                      </Select>
                    </Col>
                  </Row>
                </Space>

                <div className=" p-5">
                  <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {paginatedEvents.map((event, index) => (
                      <EventCard key={index} event={event} />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

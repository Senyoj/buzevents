import { Input, Select } from "antd";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SearchBar = () => {
  const locations = [
    { value: "greater-accra", label: "Greater Accra" },
    { value: "ashanti", label: "Ashanti" },
    { value: "central", label: "Central" },
    { value: "eastern", label: "Eastern" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="border rounded-full flex flex-col md:flex-row">
        {/* Search Input Section */}
        <div className="flex items-center flex-1 p-2">
          <FaSearch className="mx-2 text-gray-400" />
          <Input
            placeholder="Search events"
            bordered={false}
            className="flex-1"
          />
        </div>

        {/* Location Select Section */}
        <div className="md:flex items-center flex-1 border-t md:border-t-0 md:border-l p-2 hidden">
          <FaLocationDot className="mx-2 text-gray-400" />
          <Select
            placeholder="Select location"
            options={locations}
            bordered={false}
            className="flex-1"
            popupMatchSelectWidth={false}
            defaultValue="greater-accra"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

import { Select, Tabs } from "antd";

interface Location {
  value: string;
  label: string;
}

interface Category {
  key: string;
  label: string;
}

const SearchFilter: React.FC = () => {
  const locations: Location[] = [
    { value: "1", label: "Greater Accra" },
    { value: "2", label: "Eastern Region" },
    { value: "3", label: "Central Region" },
    { value: "4", label: "East Legon" },
    { value: "5", label: "Tamale" },
    { value: "6", label: "Kumasi" },
  ];

  const categories: Category[] = [
    { key: "1", label: "All" },
    { key: "2", label: "For you" },
    { key: "3", label: "Online" },
    { key: "4", label: "This weekend" },
    { key: "5", label: "Music" },
    { key: "6", label: "Food & Drink" },
    { key: "7", label: "Charity & Causes" },
  ];

  const items = categories.map(({ key, label }) => ({
    key,
    label,
    children: null,
  }));

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:items-center">
        <div className="text-lg font-medium">Browsing events in</div>
        <div className="w-full md:w-auto">
          <Select
            className="w-full md:w-[200px]"
            showSearch
            placeholder="Select location"
            optionFilterProp="label"
            options={locations}
          />
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} className="mt-4" />
    </div>
  );
};

export default SearchFilter;

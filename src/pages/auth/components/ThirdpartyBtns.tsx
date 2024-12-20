import { Button } from "antd";
import { IconType } from "react-icons";

interface ThirdpartyBtnsProps {
  Icon: IconType;
  title: string;
  onClick?: () => void;
}

const ThirdpartyBtns = ({ Icon, title, onClick }: ThirdpartyBtnsProps) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 px-4 py-6 
                 border border-opacity-20 rounded-xl transition-all duration-200 hover:bg-gray-50
                 focus:outline-none focus:ring-2 focus:ring-opacity-50"
    >
      <Icon className="text-xl" />
      <p className="text-sm md:text-base font-medium">{title}</p>
    </Button>
  );
};

export default ThirdpartyBtns;

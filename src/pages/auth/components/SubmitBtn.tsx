// import { useState } from "react";

interface SubmitBtnProps {
  title: string;
  isLoading?: boolean;
}

const SubmitBtn = ({ title, isLoading = false }: SubmitBtnProps) => {
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full px-4 py-3 md:py-4 rounded-xl text-primary font-semibold transition-all duration-200 
                   bg-secondary
                   disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isLoading ? "Loading..." : title}
    </button>
  );
};

export default SubmitBtn;

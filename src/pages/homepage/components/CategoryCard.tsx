interface CategoryCardProps {
  image: string;
  title: string;
  onClick?: () => void;
  className?: string;
}

const CategoryCard = ({
  image,
  title,
  onClick,
  className = "",
}: CategoryCardProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-transform ${className}`}
      onClick={onClick}
    >
      <div>
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={`${title} category`}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <h6 className="text-center font-medium text-xs sm:text-sm md:text-base">
        {title}
      </h6>
    </div>
  );
};

export default CategoryCard;

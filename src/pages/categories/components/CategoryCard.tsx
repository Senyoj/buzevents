// src/components/CategoryCard.tsx
import { useNavigate } from "react-router-dom";
import { Category } from "../categories-data";

const CategoryCard = ({ id, title, image,  }: Category) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categories/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer 
                 transform transition-transform duration-300 hover:scale-105"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

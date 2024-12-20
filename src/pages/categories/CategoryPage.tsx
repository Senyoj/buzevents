// src/pages/categories/CategoryPage.tsx
import { useParams } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout";
import { categories } from "./categories-data";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const category = categories.find((cat) => cat.id === id);

  if (!category) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category not found</h1>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Return Home
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4 text-textColor">
            {category.title}
          </h1>

          <p className="text-lg mb-4">{category.description}</p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Back to Categories
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryPage;

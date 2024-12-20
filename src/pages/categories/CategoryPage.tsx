// src/pages/categories/CategoryPage.tsx
import { Link, useParams } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout";
import { categories } from "./categories-data";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { Breadcrumb } from "antd";

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
        <div className="py-5">
          <Breadcrumb
            items={[
              {
                title: <Link to="/">Home</Link>,
              },
              {
                title: <p> {category.location}</p>,
              },
              {
                title: <p>{category.title}</p>,
              },
            ]}
          />
        </div>
        <div className=" w-full h-96 bg-sup p-10">
          <div className="relative mb-10 rounded-lg overflow-hidden  bg-sup w-full  text-primary">
            <h1 className=" font-bold  ">{category.title} Events</h1>
            <h2>in {category.location}</h2>
            <p className="text-md">{category.description}</p>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryPage;

import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { locations } from "../../../data/locationsData";
import PageLayout from "../../components/Layout/PageLayout";

const LocationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#1E0A3C]">
            Location not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#F05537] hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-[#ffffff]">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#1E0A3C] hover:text-[#F05537] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to destinations</span>
          </button>

          <div className="">
            {/* Left Column - Image Section */}
            <div className="space-y-6">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#00000000]"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="space-y-8">
                    <div>
                      <h1 className="text-4xl font-bold text-primary mb-4">
                        {location.title}
                      </h1>
                      <p className="text-lg leading-relaxed text-primary">
                        {location.description}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 my-5 bg-[#ffffff]/90 rounded-full">
                    <MapPin className="w-4 h-4 text-[#F05537] mr-2" />
                    <span className="text-[#1E0A3C] font-medium">
                      {location.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LocationDetails;

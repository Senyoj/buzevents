// src/routes/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/homepage/Home";
import ProtectedRoute from "./ProtectedRoute";
import Index from "../pages/Dashboard/Index";
import CategoryPage from "../pages/categories/CategoryPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PopularLocationsCarousel from "../pages/homepage/components/PopularLocationsCarousel";
import LocationDetails from "../pages/events/LocationDetails";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          }
        />

        <Route
          path="/categories/:id"
          element={
            // <ProtectedRoute>
            <CategoryPage />
            // </ProtectedRoute>
          }
        />
        <Route path="/" element={<PopularLocationsCarousel />} />
        <Route path="/location/:id" element={<LocationDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

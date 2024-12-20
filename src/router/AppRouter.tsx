import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/homepage/Home";
import ProtectedRoute from "./ProtectedRoute";
import Index from "../pages/Dashboard/Index";
import Events from "../pages/events/Events";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;

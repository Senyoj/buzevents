// src/pages/auth/Login.tsx
import { useState, FormEvent } from "react";
import { loginimg } from "../../assets/images";
import SubmitBtn from "./components/SubmitBtn";
import { Input } from "antd";
import ThirdpartyBtns from "./components/ThirdpartyBtns";
import { FaApple, FaEnvelope, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full flex justify-between">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col">
        {/* Form Section */}
        <div className="flex-grow flex flex-col justify-center max-w-lg mx-auto w-full">
          <h1 className=" mb-6 md:mb-8 text-center py-10 ">Log in</h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6 w-full"
          >
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 md:py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 md:py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                required
              />
            </div>

            <div className="pt-4">
              <SubmitBtn title="Submit" />
            </div>
            <div className="pt-10">
              <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                <ThirdpartyBtns Icon={FcGoogle} title="Sign In with Google" />
                <ThirdpartyBtns Icon={FaEnvelope} title="Continue with email" />
              </div>
              <div>
                <h5 className="pt-6 py-1">Other login methods</h5>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                  <ThirdpartyBtns Icon={FaFacebook} title="Facebook" />
                  <ThirdpartyBtns Icon={FaApple} title="Apple" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center pt-10">
              Don't have an account?
              <span>
                <Link to="/register">Sign Up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src={loginimg}
          alt="Login"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;

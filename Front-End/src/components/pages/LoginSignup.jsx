import React, { useState } from "react";
import "../../css/style.css";

const LoginSignup = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="my-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
        {/* Login Form */}
        {activeForm === "login" && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
              Log In
            </h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
               
              <button
                type="submit"
                className="mt-3 w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
              >
                Log In
              </button>
              <div className="buttn d-flex justify-between mt-3">
              <p className=" text-gray-600 cursor-pointer" 
                 onClick={() => setActiveForm("forgot-password")}
                 >
             
                 
                
                  Forgot Password?
               
              </p>
              <p className=" text-gray-600 ">
                Don’t have an account?{" "}
                </p>
              </div>
              
              <button
                type="submit"
                className="mt-3 w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
                onClick={() => setActiveForm("signup")}  >
                Sign Up
              </button>
            </form>
          </div>
        )}

        {/* Signup Form */}
        {activeForm === "signup" && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
              Sign Up
            </h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
              >
                Sign Up
              </button>
              <p className="text-center text-gray-600 mt-6">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-purple-500 hover:underline"
                  onClick={() => setActiveForm("login")}
                >
                  Log In
                </button>
              </p>
            </form>
          </div>
        )}

        {/* Forgot Password Form */}
        {activeForm === "forgot-password" && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
              Forgot Password
            </h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
              >
                Reset Password
              </button>
              <p className="text-center text-gray-600 mt-6">
                Remember your password?{" "}
                <button
                  type="button"
                  className="text-purple-500 hover:underline"
                  onClick={() => setActiveForm("login")}
                >
                  Log In
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;

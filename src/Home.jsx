import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Home Page
        </h1>
        <p className="text-lg text-gray-600">
          This is the homepage of your app. You can add content here!
        </p>
        <div className="mt-6">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

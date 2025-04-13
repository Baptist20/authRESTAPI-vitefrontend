import React from "react";

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            404 - Page Not Found
          </h2>
          <p className="text-gray-700">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  );
}

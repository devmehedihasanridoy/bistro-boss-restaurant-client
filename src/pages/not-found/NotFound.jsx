import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-error">404</h1>
        <h2 className="mt-4 text-4xl font-bold text-base-content">
          Page Not Found
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="btn btn-primary btn-wide text-white"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

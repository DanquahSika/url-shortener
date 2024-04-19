import React from "react";

// this is bar chart for shortened url links number of clicks
const Barchart = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="relative inline-block text-left">
            <button
              className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-zinc-700 border border-zinc-300 rounded-md shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              last 7 days
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <button className="px-4 py-2 bg-zinc-800 text-white text-sm font-medium rounded-md shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Export CSV
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex-1">
            <div className="w-full h-64">
              <img
                src="https://placehold.co/600x400"
                alt="Bar Chart Placeholder"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barchart;

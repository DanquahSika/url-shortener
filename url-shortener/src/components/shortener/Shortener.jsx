import React, { useState } from "react";

const ShortUrlGenerator = () => {
  const [longUrl, setLongUrl] = useState("");
  const [title, setTitle] = useState(''); 
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "http://localhost:4000/api/links/";

    try {
      const response = await fetch(apiEndpoint, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            originalUrl: longUrl,
            title: title,
          trackingEnabled,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Success:", data);
      alert("Short link created!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the short link.");
    }
  };

  return (
    <div className="contain mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          Get short and custom links, simply!
        </h1>
        <div className="w-24 h-1 bg-customOrange mx-auto mb-4"></div>
        <p className="text-lg text-zinc-600">
          Get insights into your audience with our tracking features
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-customHov shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <label htmlFor="url" className="block text-lg font-medium mb-2">
            Paste a long URL
          </label>
          <div className="flex items-center w-full mb-4">
            <input
              type="url"
              id="url"
              placeholder="Example: http://super-long-link.com/shorten-it"
              className="cursor-crosshair flex-grow p-2 border border-zinc-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-customBrown focus:border-transparent"
              required
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-customBrown focus:ring-opacity-50"
            >
              Create short link
            </button>
          </div>
          <div className="flex">
          <div className="mr-3">
          <label className="mr-1">
              Title:
              </label>
              <input
                type="text"
                className="flex-grow p-1.5 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown focus:border-transparent"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
           
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="tracking"
              className="rounded text-teal-500 focus:ring-customBrown"
              checked={trackingEnabled}
              onChange={(e) => setTrackingEnabled(e.target.checked)}
            />
            <label htmlFor="tracking" className="ml-2 text-zinc-700">
              Enable tracking
            </label>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ShortUrlGenerator;

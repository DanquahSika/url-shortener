import React, { useState, useEffect } from "react";

const Custom = ({}) => {
  const [shortenedUrl, setShortenedUrl] = useState("");

  // Fetch the shortened URL when the component mounts
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    onCopy();
  };

  useEffect(() => {
    const fetchShortenedUrl = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/links/`${shortenedUrl:shortLink}`", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

        });
        if (response.ok) {
          const data = await response.json();
          setShortenedUrl(data.shortcode); // Update the state with the shortened URL
        } else {
          throw new Error("Failed to fetch shortened URL");
        }
      } catch (error) {
        console.error("Error fetching shortened URL:", error);
      }
    };

    fetchShortenedUrl();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-customHov shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1">
          <label
            htmlFor="shortUrl"
            className="block text-sm font-medium text-zinc-700"
          >
            Your short URL
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="shortUrl"
              className="block w-full pl-3 pr-12 sm:text-sm border-zinc-300 focus:ring-customBrown rounded-md"
              placeholder="shorturl"
              value={shortenedUrl}
              onChange={(e) => setShortenedUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-zinc-800 text-white px-4 py-2 rounded-md text-sm" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Custom;

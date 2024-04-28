import React, { useState, useEffect } from "react";

const ShortUrlGenerator = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
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
      // fetchShortenedUrl(data.createLink.shortCode)
      setShortenedUrl(data.link.shortLink); // Update the state with the shortened URL
      alert("Short link created!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the short link.");
    }
  };

  const fetchShortenedUrl = async (value) => {
    try {
      console.log({value})
      const response = await fetch(`http://localhost:4000/api/links/${value}`);
      if (response.ok) {
        const data = await response.json();
      } else {
        throw new Error("Failed to fetch shortened URL");
      }
    } catch (error) {
      console.error("Error fetching shortened URL:", error);
    }
  };

  useEffect(() => {}, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    alert('copied to clipboard');
  };

  return (
    <div>
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
      <div className="flex mt-3">
        <button className="bg-zinc-800 text-white px-4 py-2 rounded-md text-sm" onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default ShortUrlGenerator;

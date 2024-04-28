import React, { useEffect, useState } from "react";
import axios from "axios";

const Alllinks = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletedLinkId, setDeletedLinkId] = useState(null);

  useEffect(() => {
    fetchShortenedLinks();
  }, []);

  const fetchShortenedLinks = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/links/", {
        withCredentials: true,
      });
      setShortenedLinks(res.data);
    } catch (error) {
      console.error("Error fetching shortened links:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/links/?search=${searchTerm}`,
        {
          withCredentials: true,
        }
      );
      setShortenedLinks(res.data);
    } catch (error) {
      console.error("Error searching for links:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleDeleteLink = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/links/${id}`, 
      { withCredentials: true });
      console.log(response.data);
                setDeletedLinkId(response.data);
    } catch (error) {
      console.error("Error deleting link:", error);
    }
  };

  return (
    <div>
      <div className="text-zinc-900 transition duration-500 ease-in-out">
        <div className="contain  px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Links</h1>
          <div className="bg-cardThree shadow-2 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                placeholder="Search short URL"
                className="border p-2 rounded w-full lg:w-1/3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="bg-customOrange text-white p-2 rounded-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="border-b-2 border-zinc-200 p-2 text-left text-xs font-semibold uppercase tracking-wider">
                      Original URL
                    </th>
                    <th className="border-b-2 border-zinc-200 p-2 text-left text-xs font-semibold uppercase tracking-wider">
                      Short URL
                    </th>
                    <th className="border-b-2 border-zinc-200 p-2 text-left text-xs font-semibold uppercase tracking-wider">
                      Clicks
                    </th>
                    <th className="border-b-2 border-zinc-200 p-2 text-left text-xs font-semibold uppercase tracking-wider">
                      Created
                    </th>
                    <th className="border-b-2 border-zinc-200 p-2" />
                  </tr>
                </thead>
                <tbody>
                  {shortenedLinks.map((link) => (
                    <tr key={link.id}>
                      {/* Table data */}
                      <td className="border-b border-zinc-200 p-2 text-sm">
                        {link.originalUrl}
                      </td>
                      <td className="border-b border-zinc-200 p-2 text-sm">
                        {link.shortLink}
                      </td>
                      <td className="border-b border-zinc-200 p-2 text-sm">
                        {link.clicks}
                      </td>
                      <td className="border-b border-zinc-200 p-2 text-sm">
                        {formatDate(link.createdAt)}
                      </td>
                      <td className="border-b border-zinc-200 p-2 text-right">
                        <button
                          className="text-blue-500 hover:text-blue-600 ml-2 px-2 rounded-lg bg-zinc-300"
                          onClick={() => handleEditLink(link.id)}
                        >
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-600 ml-2 px-2 rounded-lg bg-zinc-300"onClick={() => handleDeleteLink(link)}>
                          Delete
                        </button>       
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alllinks;
// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Assuming you have Axios installed

// export default function Profile() {
//   const [links, setLinks] = useState([]);

//   useEffect(() => {
//     async function fetchLinks() {
//       try {
//         const response = await axios.get("/api/links");
//         setLinks(response.data);
//       } catch (error) {
//         console.error("Error fetching links:", error);
//       }
//     }

//     fetchLinks();
//   }, []);

//   // Render your dashboard components using the fetched links data
//   return (
//     <tbody>
//       {/* {links.map((link, index) => ( */}
//         <tr key={index}>
//           <td className="px-5 py-5 border-b border-zinc-200 bg-white text-sm">
//             {index + 1}
//           </td>
//           <td className="px-5 py-5 border-b border-zinc-200 bg-white text-sm">
//             {link.url}
//           </td>
//           <td className="px-5 py-5 border-b border-zinc-200 bg-white text-sm">
//             {link.description}
//           </td>
//           <td className="px-5 py-5 border-b border-zinc-200 bg-white text-sm text-green-500">
//             {link.clicks}
//           </td>
//           <td className="px-5 py-5 border-b border-zinc-200 bg-white text-sm">
//             {link.dateCreated}
//           </td>
//           <td className="px-5 py-5 border-b border-zinc-200 bg-white text-sm">
//             {link.expireAfter}
//           </td>
//           <td className="px-5 py-5 border-b border-zinc-200 bg-white text-sm">
//             <button className="text-zinc-500 hover:text-zinc-700">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </td>
//         </tr>
//       {/* ))} */}
//     </tbody>
//   );
// }




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const tableCellClasses = 'px-5 py-5 border-b border-zinc-200 bg-white text-sm';
const positiveClicksClass = 'text-green-500';
const negativeClicksClass = 'text-red-500';

const LinksTable = ({ links }) => {
    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">#</th>
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Name</th>
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Value</th>
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Clicks</th>
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Date Created</th>
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Expire after</th>
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody>
                {links.map((link, index) => (
                    <tr key={index}>
                        <td className={tableCellClasses}>{index + 1}</td>
                        <td className={tableCellClasses}>{link.url}</td>
                        <td className={tableCellClasses}>{link.description}</td>
                        <td className={`${tableCellClasses} ${link.clicks > 0 ? positiveClicksClass : negativeClicksClass}`}>
                            {link.clicks > 0 ? `+${link.clicks}` : link.clicks}
                        </td>
                        <td className={tableCellClasses}>{link.dateCreated}</td>
                        <td className={tableCellClasses}>{link.expireAfter}</td>
                        <td className={tableCellClasses}>
                            <button className="text-zinc-500 hover:text-zinc-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const LinksDashboard = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/links');
                setLinks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleNewLinkClick = () => {
        // Handle new link button click event here
    };

    return (
        <div className="bg-zinc-100 font-sans leading-normal tracking-normal">
            <div className="contain mx-auto mt-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Hey, Daniel 👋</h1>
                    <div className="text-sm">26 June 2023</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-2">Total Clicks</h2>
                        <p className="text-3xl font-bold">15,242</p>
                        <p className="text-green-500">+1,310 This week</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-2">Visitors</h2>
                        <p className="text-3xl font-bold">9,422</p>
                        <p className="text-red-500">-150 This week</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-2">Unused Link</h2>
                        <p className="text-3xl font-bold">150</p>
                        <p className="text-green-500">+10 This week</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">My Links</h2>
                        <button onClick={handleNewLinkClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            New Link
                        </button>
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search link" />
                    </div>
                    <div className="overflow-x-auto">
                        <LinksTable links={links} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinksDashboard;


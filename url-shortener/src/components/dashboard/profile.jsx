
import React, { useEffect, useState } from 'react';

const tableCellClasses = 'px-5 py-5 border-b border-zinc-200 bg-white text-sm';
const positiveClicksClass = 'text-green-500';
const negativeClicksClass = 'text-red-500';


const LinksDashboard = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:4000/links');
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
        <div className="font-sans leading-normal tracking-normal w-full overflow-y-none">
            <div className="contain mx-auto mt-8">
                <div className="flex justify-between items-center mb-6">
                    {/* fetch user */}
                    <h1 className="text-2xl font-bold">Hey, Daniel 👋</h1>
                    <div className="text-sm">26 June 2023</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-customHov p-6 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-2">Total Clicks</h2>
                        <p className="text-3xl font-bold"></p>
                        <p className="text-green-500">+1,310 This week</p>
                    </div>
                    <div className="bg-cardOne p-6 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-2">Visitors</h2>
                        <p className="text-3xl font-bold">...</p>
                        <p className="text-red-500">-150 This week</p>
                    </div>
                    <div className="bg-cardTwo p-6 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-2">Unused Link</h2>
                        <p className="text-3xl font-bold">...</p>
                        <p className="text-green-500">+10 This week</p>
                    </div>
                </div>

                <div className="bg-cardThree p-6 rounded-lg shadow mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">My Links</h2>
                        <button onClick={handleNewLinkClick} className="bg-customOrange hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Date Updated</th>
                    <th className="px-5 py-3 border-b-2 border-zinc-200 bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody>
                {links.map((link, index) => (
                    <tr key={index}>
                        <td className={tableCellClasses}>{index + 1}</td>
                        <td className={tableCellClasses}>{link.url}</td>
                        <td className={tableCellClasses}>{link.title}</td>
                        <td className={`${tableCellClasses} ${link.clicks > 0 ? positiveClicksClass : negativeClicksClass}`}>
                            {link.clicks > 0 ? `+${link.clicks}` : link.clicks}
                        </td>
                        <td className={tableCellClasses}>{link.dateCreated}</td>
                        <td className={tableCellClasses}>{link.dateUpdated}</td>
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
  
export default LinksDashboard;


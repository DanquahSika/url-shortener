// import React, { useState } from 'react';
// import axios from 'axios';

// const inputClasses = "border p-2";
// const buttonClasses = "px-4 py-2 rounded";
// const flexClasses = "flex items-center";
// const labelClasses = "block font-medium";
// const selectClasses = "border p-2 w-full";

// const Shortener = () => {
//     const [originalUrl, setOriginalUrl] = useState('');
//     const [customAlias, setCustomAlias] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [visibility, setVisibility] = useState('public/private');

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/shorten-url', {
//                 originalUrl,
//                 customAlias,
//                 password,
//                 name,
//                 description,
//                 visibility
//             });
//             // Handle success, e.g., show success message or update UI
//             console.log('Shortened URL:', response.data.shortUrl);
//         } catch (error) {
//             // Handle error, e.g., show error message
//             console.error('Error creating short URL:', error);
//         }
//     };

//     return (
//         <div className="bg-zinc-100 p-8">
//             <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
//                 <h1 className="text-2xl font-bold">Get Short and Custom URLs, simply!</h1>
//                 <p className="text-zinc-600">Get insights into your audience with our tracking features</p>

//                 <form className="mt-6" onSubmit={handleFormSubmit}>
//                     {/* Original URL */}
//                     <div className="mb-4">
//                         <label className={labelClasses}>Original URL</label>
//                         <div className={flexClasses}>
//                             <input
//                                 type="text"
//                                 className={inputClasses + " flex-1"}
//                                 placeholder="Enter URL"
//                                 value={originalUrl}
//                                 onChange={(e) => setOriginalUrl(e.target.value)}
//                             />
//                             <button
//                                 type="submit"
//                                 className={"ml-2 bg-blue-500 text-white " + buttonClasses}
//                             >
//                                 Create Short URL
//                             </button>
//                         </div>
//                     </div>

//                     {/* Custom Alias */}
//                     <div className="mb-4">
//                         <label className={labelClasses}>Custom Alias</label>
//                         <input
//                             type="text"
//                             className={inputClasses + " w-full"}
//                             placeholder="simply/"
//                             value={customAlias}
//                             onChange={(e) => setCustomAlias(e.target.value)}
//                         />
//                     </div>

//                     {/* Password */}
//                     <div className="mb-4">
//                         <label className={labelClasses}>Password (premium)</label>
//                         <input
//                             type="password"
//                             className={inputClasses + " w-full"}
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>

//                     {/* Name */}
//                     <div className="mb-4">
//                         <label className={labelClasses}>Name your url</label>
//                         <input
//                             type="text"
//                             className={inputClasses + " w-full"}
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>

//                     {/* Description */}
//                     <div className="mb-4">
//                         <label className={labelClasses}>Description</label>
//                         <textarea
//                             className={inputClasses + " w-full"}
//                             rows="2"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                         ></textarea>
//                     </div>

//                     {/* Visibility */}
//                     <div className="mb-4">
//                         <label className={labelClasses}>Visibility</label>
//                         <select
//                             className={selectClasses}
//                             value={visibility}
//                             onChange={(e) => setVisibility(e.target.value)}
//                         >
//                             <option value="public/private">Public/Private</option>
//                             <option value="Public">Public</option>
//                             <option value="Private">Private</option>
//                         </select>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className={"bg-blue-500 text-white " + buttonClasses}
//                     >
//                         Customize
//                     </button>
//                 </form>

//                 {/* Custom URL */}
//                 <div className="mt-6">
//                     <label className={labelClasses}>Your custom URL</label>
//                     <div className={flexClasses}>
//                         <input
//                             type="text"
//                             className={inputClasses + " flex-1"}
//                             readOnly
//                             // value={/* Your custom URL state */}
//                         />
//                         <button className={"ml-2 bg-zinc-300 text-black " + buttonClasses}>
//                             Copy
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Shortener;


import React, { useState } from 'react';

const ShortUrlGenerator = () => {
    const [longUrl, setLongUrl] = useState('');
    const [trackingEnabled, setTrackingEnabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiEndpoint = 'https://example.com/api/shorten';

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    longUrl,
                    trackingEnabled,
                }),
            });
            const data = await response.json();
            console.log('Success:', data);
            alert('Short link created! Check the console for details.');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the short link.');
        }
    };

    return (
        <div className="contain mx-auto px-4 py-10">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">Get short and custom links, simply!</h1>
                <div className="w-24 h-1 bg-teal-400 mx-auto mb-4"></div>
                <p className="text-lg text-zinc-600">Get insights into your audience with our tracking features</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="url" className="block text-lg font-medium mb-2">Paste a long URL</label>
                    <div className="flex items-center mb-4">
                        <input
                            type="url"
                            id="url"
                            placeholder="Example: http://super-long-link.com/shorten-it"
                            className="flex-grow p-2 border border-zinc-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            required
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-2 rounded-r-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                        >
                            Create short link
                        </button>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="tracking"
                            className="rounded text-teal-500 focus:ring-teal-400"
                            checked={trackingEnabled}
                            onChange={(e) => setTrackingEnabled(e.target.checked)}
                        />
                        <label htmlFor="tracking" className="ml-2 text-zinc-700">Enable tracking</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShortUrlGenerator;

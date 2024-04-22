import React, { useState } from 'react';

const Custom = () => {
    const [customAlias, setCustomAlias] = useState('');
    const [password, setPassword] = useState('');
    const [urlName, setUrlName] = useState('');
    const [urlDescription, setUrlDescription] = useState('');
    const [visibility, setVisibility] = useState('public');

    const handleSaveChanges = () => {
        // Add logic to save changes
        console.log('Custom Alias:', customAlias);
        console.log('Password:', password);
        console.log('URL Name:', urlName);
        console.log('URL Description:', urlDescription);
        console.log('Visibility:', visibility);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <div className="flex-1">
                    <label htmlFor="shortUrl" className="block text-sm font-medium text-zinc-700">Your short URL</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            type="text"
                            id="shortUrl"
                            className="block w-full pl-3 pr-12 sm:text-sm border-zinc-300 rounded-md"
                            placeholder="simply.link/lin84k"
                            disabled
                        />
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-zinc-800 text-white px-4 py-2 rounded-md text-sm">Copy</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Customize</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="customAlias" className="block text-sm font-medium text-zinc-700">Enter a custom alias (optional)</label>
                    <input
                        type="text"
                        id="customAlias"
                        className="mt-1 block w-full sm:text-sm border-zinc-300 rounded-md"
                        placeholder="simply.link/mylink"
                        value={customAlias}
                        onChange={(e) => setCustomAlias(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-zinc-700">Enter your password (premium and pro plans)</label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full sm:text-sm border-zinc-300 rounded-md"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="urlName" className="block text-sm font-medium text-zinc-700">Name your url (optional)</label>
                    <input
                        type="text"
                        id="urlName"
                        className="mt-1 block w-full sm:text-sm border-zinc-300 rounded-md"
                        placeholder="Example: daily report"
                        value={urlName}
                        onChange={(e) => setUrlName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="urlDescription" className="block text-sm font-medium text-zinc-700">Describe your url (optional)</label>
                    <input
                        type="text"
                        id="urlDescription"
                        className="mt-1 block w-full sm:text-sm border-zinc-300 rounded-md"
                        placeholder="Example: daily report about working process"
                        value={urlDescription}
                        onChange={(e) => setUrlDescription(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="visibility" className="block text-sm font-medium text-zinc-700">Visibility</label>
                <select
                    id="visibility"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-zinc-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                >
                    <option value="public">public (everyone can see it)</option>
                    <option value="private">private (only you can see it)</option>
                </select>
            </div>
            <button
                className="bg-black text-white px-4 py-2 rounded-md text-sm w-full"
                onClick={handleSaveChanges}
            >
                Save changes
            </button>
        </div>
    );
};

export default Custom;

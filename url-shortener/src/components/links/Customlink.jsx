import React from 'react'

const Customlink = () => {
    
    const copyToClipboard = () => {
        const urlInput = document.getElementById('url');
        urlInput.select();
        document.execCommand('copy')
    };

  return (
    <div>
        <div className="max-w-lg mx-auto p-4">
      <label htmlFor="url" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Your custom URL
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300 bg-zinc-50 text-zinc-500 text-sm">
          simply.link/
        </span>
        <input
          type="text"
          name="url"
          id="url"
          className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-zinc-300"
          placeholder="yourlink"
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
    </div>
    </div>
  )
}

export default Customlink
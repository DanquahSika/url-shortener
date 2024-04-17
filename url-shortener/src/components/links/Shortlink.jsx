import React from 'react'

const Shortlink = () => {

    const copyToClipboard = () => {
        const urlInput = document.getElementById('url');
        urlInput.select();
        document.execCommand('copy')
    };
    
  return (
    <div>
        {/* second component */}
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <label
          htmlFor="short-url"
          className="block text-sm font-medium text-zinc-700"
        >
          Your short URL
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="text"
            name="short-url"
            id="short-url"
            label="simply.link/lin84k"
            className="flex-1 block w-full  bg-slate-50 rounded-none rounded-l-md sm:text-sm border-zinc-300"
            readOnly
          />
          <button
            className="bg-slate-100 text-zinc-700 px-4 py-2 border border-zinc-300 text-sm font-medium rounded-none rounded-r-md hover:bg-zinc-300"
            onclick={copyToClipboard}
          >
            Copy
          </button>
          <button className="ml-2 bg-customOrange text-white px-4 py-2 border border-teal-400 text-sm font-medium rounded-md hover:bg-teal-500">
            Customize
          </button>
        </div>
      </div>

    </div>
  )
}

export default Shortlink
import React from 'react'

const Charts = () => {
  return (
    <div>
        {/* this is for click trend for specific shortened link */}
        <div className="flex flex-col md:flex-row gap-8 p-8">
  <div className="flex-1">
    <div className="mb-4">
      <label htmlFor="url-select" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Select short URL</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input type="text" name="url" id="url-select" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-zinc-300 rounded-md" placeholder="simply.link/lin2tb" />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <svg className="h-5 w-5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
      <img src="https://placehold.co/600x400" alt="Line Chart" className="w-full h-auto rounded-lg" />
    </div>
    <div className="mt-4">
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Export CSV</button>
    </div>

    {/* this is for age groups who clicked on the link */}
  </div>
  <div className="flex-1">
    <div className="mb-4">
      <label htmlFor="url-select" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Select short URL</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input type="text" name="url" id="url-select" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-zinc-300 rounded-md" placeholder="simply.link/lin2tb" />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <svg className="h-5 w-5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
      <img src="https://placehold.co/600x400" alt="Bar Chart" className="w-full h-auto rounded-lg" />
    </div>
    <div className="mt-4">
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Export CSV</button>
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row justify-between gap-4 p-4" >
  {/* this is for map chart of location where link */}
  <div className="flex-1">
    <div className="mb-4">
      <label htmlFor="url-select" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Select short URL</label>
      <select id="url-select" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-zinc-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-zinc-700 dark:border-zinc-600">
        <option>simply.link/lin2tb</option>
      </select>
    </div>
    <div className="bg-white shadow rounded-lg p-4 mb-4 dark:bg-zinc-700">
      <img src="https://placehold.co/600x400" alt="World map" className="w-full h-auto rounded-lg" />
    </div>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>USA</span>
        <span>5</span>
      </div>
      <div className="flex justify-between">
        <span>Australia</span>
        <span>3</span>
      </div>
      <div className="flex justify-between">
        <span>Canada</span>
        <span>4</span>
      </div>
    </div>
    <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:bg-zinc-600 dark:hover:bg-zinc-500">Export CSV</button>
  </div>

{/* this is chart for devices used */}
  <div className="flex-1">
    <div className="mb-4">
      <label htmlFor="url-select-2" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Select short URL</label>
      <select id="url-select-2" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-zinc-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-zinc-700 dark:border-zinc-600">
        <option>simply.link/lin2tb</option>
      </select>
    </div>
    <div className="bg-white shadow rounded-lg p-4 mb-4 dark:bg-zinc-700">
      <img src="https://placehold.co/400x400" alt="Pie chart" className="w-full h-auto rounded-lg" />
    </div>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>iOS</span>
        <span>70%</span>
      </div>
      <div className="flex justify-between">
        <span>Android</span>
        <span>20%</span>
      </div>
      <div className="flex justify-between">
        <span>Desktop</span>
        <span>10%</span>
      </div>
    </div>
    <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:bg-zinc-600 dark:hover:bg-zinc-500">Export CSV</button>
  </div>
</div>
    </div>
  )
}

export default Charts
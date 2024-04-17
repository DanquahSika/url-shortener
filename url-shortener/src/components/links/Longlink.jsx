import React from 'react'

const Longlink = () => {
  return (
    <div>
         <div className="contain ml-2rem px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Get short and custom links, simply!
          </h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-4" />
          <p className="text-lg text-zinc-600">
            Get insights into your audience with our tracking features
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <form>
            <label htmlFor="url" className="block text-lg font-medium mb-2">
              Paste a long URL
            </label>
            <div className="flex items-center mb-4">
              <input
                type="url"
                id="url"
                placeholder="Example: http://super-long-link.com/shorten-it"
                className="flex-grow p-2 border border-zinc-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-customOrange text-white px-6 py-2 rounded-r-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              >
                Create short link
              </button>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="tracking"
                className="rounded text-teal-500 focus:ring-teal-400"
              />
              <label htmlFor="tracking" className="ml-2 text-zinc-700">
                Enable tracking
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Longlink
import React from 'react'

const Alllinks = () => {
  return (
    <div>
         <div className="bg-white text-zinc-900 transition duration-500 ease-in-out">
        <div className="contain  px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">All links</h1>
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <input type="text" placeholder="Search short URL" className="border p-2 rounded w-full lg:w-1/3" />
              <button className="bg-blue-500 text-white p-2 rounded-lg">Search</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="border-b-2 border-zinc-200 p-4 text-left text-xs font-semibold uppercase tracking-wider">Original URL</th>
                    <th className="border-b-2 border-zinc-200 p-4 text-left text-xs font-semibold uppercase tracking-wider">Short URL</th>
                    <th className="border-b-2 border-zinc-200 p-4 text-left text-xs font-semibold uppercase tracking-wider">Clicks</th>
                    <th className="border-b-2 border-zinc-200 p-4 text-left text-xs font-semibold uppercase tracking-wider">Created</th>
                    <th className="border-b-2 border-zinc-200 p-4" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-zinc-200 p-4 text-sm">https://www.example.com/long-url-1</td>
                    <td className="border-b border-zinc-200 p-4 text-sm">simply.link/lnk1</td>
                    <td className="border-b border-zinc-200 p-4 text-sm">17</td>
                    <td className="border-b border-zinc-200 p-4 text-sm">2023-10-13</td>
                    <td className="border-b border-zinc-200 p-4 text-right">
                      <button className="text-blue-500 hover:text-blue-600">Edit</button>
                      <button className="text-red-500 hover:text-red-600 ml-2">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* insert the clicks display here */}
              <div className="bg-zinc-300 h-64 rounded-lg" />
              <div className="bg-zinc-300 h-64 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alllinks
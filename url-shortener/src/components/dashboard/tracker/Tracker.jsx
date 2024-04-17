import React from 'react'
import Barchart from '../analytics/Barchart'

const Tracker = () => {
  return (
    <div>
        <div className="contain mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Tracking short links</h1>
    <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <input type="text" placeholder="Search short URL" className="border p-2 rounded w-full lg:w-1/3" />
        {/* tracker edits go here  */}
        <button className="bg-blue-500 text-white p-2 rounded-lg">Search</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="border-b-2 border-zinc-200 dark:border-zinc-700 p-4 text-left text-xs font-semibold uppercase tracking-wider">Original URL</th>
              <th className="border-b-2 border-zinc-200 dark:border-zinc-700 p-4 text-left text-xs font-semibold uppercase tracking-wider">Short URL</th>
              <th className="border-b-2 border-zinc-200 dark:border-zinc-700 p-4 text-left text-xs font-semibold uppercase tracking-wider">Clicks</th>
              <th className="border-b-2 border-zinc-200 dark:border-zinc-700 p-4 text-left text-xs font-semibold uppercase tracking-wider">Created</th>
              <th className="border-b-2 border-zinc-200 dark:border-zinc-700 p-4" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-zinc-200 dark:border-zinc-700 p-4 text-sm">https://www.example.com/long-url-1</td>
              <td className="border-b border-zinc-200 dark:border-zinc-700 p-4 text-sm">simply.link/lnk1</td>
              <td className="border-b border-zinc-200 dark:border-zinc-700 p-4 text-sm">17</td>
              <td className="border-b border-zinc-200 dark:border-zinc-700 p-4 text-sm">2023-10-13</td>
              <td className="border-b border-zinc-200 dark:border-zinc-700 p-4 text-right">
                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                <button className="text-red-500 hover:text-red-600 ml-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/* <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-zinc-300 dark:bg-zinc-700 h-64 rounded-lg">
          <Barchart />
        </div>
        <div className="bg-zinc-300 dark:bg-zinc-700 h-64 rounded-lg">

        </div>
        <div className="bg-zinc-300 dark:bg-zinc-700 h-64 rounded-lg" />
        <div className="bg-zinc-300 dark:bg-zinc-700 h-64 rounded-lg" />
      </div>
    </div> */}
  </div>
    </div>
  )
}

export default Tracker
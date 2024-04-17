import React from "react";

const Customize = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="customAlias"
                className="block text-sm font-medium text-zinc-600 dark:text-zinc-200"
              >
                Enter a custom alias (optional)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="customAlias"
                  name="customAlias"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-zinc-300 dark:border-zinc-600  rounded-md"
                  placeholder="simply.link/mylink"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
              >
                Enter your password (premium and pro plans)
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-zinc-300 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white rounded-md"
                  placeholder="password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <svg
                    className="h-5 w-5 text-zinc-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 8a6 6 0 011.2 11.7A2 2 0 0016 18H4a2 2 0 00-1.8 1.2A6 6 0 1118 8zm-7 3a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="urlName"
                className="block text-sm font-medium text-zinc-900 dark:text-zinc-200"
              >
                Name your url (optional)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="urlName"
                  name="urlName"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-zinc-300 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white rounded-md"
                  placeholder="Example: daily report"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="urlDescription"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
              >
                Describe your url (optional)
              </label>
              <div className="mt-1">
                <textarea
                  id="urlDescription"
                  name="urlDescription"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-zinc-300 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white rounded-md"
                  placeholder="Example: daily report about working process"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customize;

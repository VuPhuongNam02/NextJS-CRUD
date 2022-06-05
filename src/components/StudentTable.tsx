import React from "react";

function StudentTable() {
  return (
    <>
      <div className="relative rounded-xl overflow-auto max-h-[70vh]">
        <div className="shadow-sm overflow-hidden my-8">
          <table className="border-collapse table-fixed w-full text-sm">
            <thead>
              <tr>
                <th className="border-b text-xl dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                  Name
                </th>
                <th className="border-b text-xl dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                  Age
                </th>
                <th className="border-b text-xl dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                  Avatar
                </th>
                <th className="border-b text-xl dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left"></th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
              <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  Malcolm Lockyer
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  1961
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Edit
                  </button>
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentTable;

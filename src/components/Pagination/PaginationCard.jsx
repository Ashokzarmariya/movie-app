/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Pagination({ prevPage, nextPage, pageNo }) {
  return (
    <div className="bg-black px-4 py-3 flex items-center justify-between border-t sm:px-6 mt-5">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button onClick={prevPage} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <button
              
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {pageNo}
            </button>
            <button
              
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {pageNo+1}
            </button>
            <button
             
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              {pageNo+2}
            </button>

            <button
              onClick={nextPage}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

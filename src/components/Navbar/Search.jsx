import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../../ReduxToolkit/SearchSlice";
import { Menu, Transition } from "@headlessui/react";
import { Fragment} from "react";


const genre = [{ name: "ashokashokzarmariya" },{ name: "ashokashokzarmariya" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Search() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState();
  const searchResults = useSelector(
    (store) => store.searchResults.search_results
  );
  console.log("searchResults", searchResults);

  //const navigation = [1, 2]

  const handleOnChange = () => {
    dispatch(fetchSearch(keyword));
  };
//   useEffect(() => {
   
//   }, []);
  return (
    <div>
      <div className="flex space-x-4">
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none ">
              <span className="sr-only">Open user menu</span>

                          <p  className={classNames(
                                "text-white hover:bg-gray-700 hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}>
                              
              
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                  <input
                    type="text"
                    name="search"
                    id="price"
                    className="bg-gray-800 text-gray-300 font-medium block w-full pl-1 pr-12 sm:text-xl focus:outline-none  rounded-md"
                    placeholder="Search"
                    onChange={(e) => {
                      setKeyword(e.target.value);
                      handleOnChange();
                    }}
                  />
                  <hr className="bg-white"></hr>
                </div>
           </p>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {/* dropdown genres */}

            <Menu.Items className=" overflow-auto origin-top-right absolute right-0 mt-2  rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {genre.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <Link
                      to={`/genre/${item.id}`}
                      className={classNames(
                        active ? "bg-gray-400" : "",
                        "block px-4 py-2 text-sm text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        {/* navbar ites */}

        {/* {navigation.map((item) => (
                        <p
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <Link to={`/${item.name.toLowerCase()}`}>
                            {item.name}
                          </Link>
                        </p>
                      ))} */}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function Header() {
  const { list } = useSelector((store) => store);
  const location = useLocation();
  const [params] = useSearchParams();
  const query = params.get("search_query");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      //arama sayfasına yönlendir
      navigate(`/results?search_query=${searchQuery}`);
    }
  };
  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    } else {
      setSearchQuery("");
    }
  }, [query, location.pathname]);
  return (
    <header className="mb-10 flex justify-between items-center">
      <Link to={"/"}>
        <img src="/tabii.svg" alt="tabii" className="max-w-[150px] h-[100px]" />
      </Link>
      {(location.pathname === "/" || location.pathname === "/results") && (
        <form
          onSubmit={handleSubmit}
          className="flex border rounded-[20px] overflow-hidden"
        >
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            type="text"
            className="bg-[#0f0f0f] px-2 sm:px-5 py-1 sm:py-2 
              outline-none rounded-l-[20px] lg:w-[450px] md:w-[350px]"
          />
          <button className="px-3 sm:px-4 sm:text-2xl bg-secondary hover:bg-zinc-600 transition duration-300">
            <IoIosSearch />
          </button>
        </form>
      )}

      <Link
        to={"/watch-list"}
        className="flex gap-5 hover:text-gray-300 transition"
      >
        <div className="relative">
          <IoBookmark className="text-xl" />
          <span className="absolute right-[-13px] top-[-13px] text-black bg-[#00FF99] rounded-full text-sm size-5 grid place-items-center font-semibold">
            {list.length}
          </span>
        </div>
        Watch List
      </Link>
    </header>
  );
}

export default Header;

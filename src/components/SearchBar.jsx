import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { fetch } from "../util/rapid";
import useDebounce from '../util/useDebounce'

export default function SearchBar() {
  const [hideMagni, setHideMagni] = useState("hidden");
  const [search, setSearch] = useState('');
  const [searchResult, setsearchResult] = useState(null)
  const [open, setOpen] = useState(false)

  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if(search === '') {
      setOpen(false)
      return;
    }
    fetch(`search?part=snippet&q=${search}`)
      .then((data) => setsearchResult(data.items), setOpen(true))
  }, [debouncedSearch]);

  return (
    <section className="flex md:mx-[50px] xl:mx-0 md:w-[50%] xl:w-[auto]">
      <div className="hidden md:flex md:w-[100%] xl:w-[auto]">
        <div className="relative md:w-[100%] xl:w-[auto]">
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-[38px] rounded-l-full border border-gray-300 md:w-[100%] xl:w-[540px] xl:focus:w-[550px]"
            onFocus={() => setHideMagni("block")}
            onBlur={() => setHideMagni("hidden")}
          />
          <HiMagnifyingGlass
            size={20}
            title="Search"
            className={`${hideMagni} absolute top-[0.7rem] ml-3`}
          />
         </div> 
         {open ? (
          <div className="absolute bg-[#FFFFFF] shadow-2xl rounded-2xl top-14 h-[45%] w-[550px]">
          {searchResult &&
            searchResult.map((search, index) => (
              <div className="flex space-x-3 pl-4 pb-4" key={index}>
                <HiMagnifyingGlass size={20} title="Search" />
                <h1>{search.snippet.title.slice(0, 50)}</h1>
              </div>
            ))}
        </div>
         ): null}
        <button className="w-[64px] pl-[20px] hover:bg-gray-100 rounded-r-full border border-gray-300">
          <HiMagnifyingGlass size={20} title="Search" />
        </button>
      </div>
      <div className="md:hidden">
        <button className="h-[35px] w-[35px] pl-2 hover:bg-gray-100 rounded-full">
          <HiMagnifyingGlass size={20} title="Search" />
        </button>
      </div>

      {/* micro phone */}
      <div className="hidden sm:block ml-[16px] my-auto">
        <button className="h-[40px] w-[40px] pl-[10px] rounded-full hover:bg-gray-200">
          <img
            src="/images/voice-search.png"
            className="w-[18px]"
            alt="MicroPhone"
            title="Search with your voice"
          />
        </button>
      </div>
    </section>
  );
}

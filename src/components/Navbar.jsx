import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineMore } from "react-icons/ai";
import { useDispatch } from "react-redux";

import {SearchBar, Button, Setting} from "./";
import {SidebarOpenClose} from '../redux/feature/GlobalState'
import { useState } from "react";



export default function Navbar() {
  const dispatch = useDispatch();
  const [openDrop, setOpenDrop] = useState()
  return (
    <nav className="flex justify-between items-center h-[56px]">
      <div className="flex">
        <button className="mx-[16px] h-[40px] w-[40px] pl-3 rounded-full hover:bg-gray-200"
        onClick={() => dispatch(SidebarOpenClose())}
        >
          <AiOutlineMenu />
        </button>
        <Link to="/">
          <img
            src="/images/logo.PNG"
            alt="youtube"
            className="w-[100px] h-[24px] mt-2"
          />
        </Link>
      </div>

      {/* Searchbar component */}
      <SearchBar />

      {/* right side */}
      <div className="flex">
        <div className="mt-2">
          <AiOutlineMore size={25} className="pointer" title="settings" onClick={() =>setOpenDrop(!openDrop)}/>
          {openDrop ? (
            <Setting />
          ): null}
        </div>
       <Button />
      </div>
    </nav>
  );
}

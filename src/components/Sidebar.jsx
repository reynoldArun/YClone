import { useSelector, useDispatch } from "react-redux";
import { Explore, sideData } from "../util/data";
import { setCategory } from "../redux/feature/GlobalState";
import Footer from "./Footer";
import SideOptions from "./SideOptions";

export default function Sidebar() {
  const { SidebarOpen } = useSelector((state) => state.GlobalState);
  const dispatch = useDispatch();

  
  return (
    <aside className="w-[15%] ml-4 hidden lg:flex flex-col">
      {SidebarOpen ? <SideOptions /> : null}
      <div>
        {SidebarOpen ? (
          <div>
            {Explore.map((item, index) => (
              <button
                onClick={() => dispatch(setCategory(item.name))}
                className="flex w-[90%] pb-2  hover:bg-gray-100 rounded-sm  space-y-3"
                key={index}
              >
                <span className="pt-3 pr-3 font-extrabold">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        ) : (
          <div>
            {sideData.map((sideItem, index) => (
              <button
                className="flex w-[90%] pb-2 hover:bg-gray-100 rounded-sm space-x-3 space-y-3"
                key={index}
              >
                <span className="pt-3 pr-3 font-extrabold">
                  {sideItem.icon}
                </span>
                <span>{sideItem.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      {SidebarOpen ? <Footer /> : null}
    </aside>
  );
}

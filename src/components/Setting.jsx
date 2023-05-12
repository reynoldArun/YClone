import {settingOpt} from '../util/data'

export default function Setting() {

  return (
    <div className="absolute shadow-2xl right-28 top-14 bg-[#FFFFFF] rounded-2xl w-[295px] h-[420px]">
        {settingOpt && settingOpt.map((setting, index) => (
             <button
             className="flex w-[90%] pb-2 pl-4 hover:bg-gray-100 rounded-sm space-x-3 space-y-3"
             key={index}
           >
             <span className="pt-3 pr-3 font-extrabold">
               {setting.icon}
             </span>
             <span>{setting.name}</span>
           </button>
        ))}
    </div>
  )
}

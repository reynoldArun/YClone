import { RxAvatar } from "react-icons/rx";

export default function Button() {
  return (
    <div className="flex items-center mx-[15px] border border-gray-400 h-[36px] w-[100px] rounded-full hover:bg-blue-200">
      <RxAvatar className="px-2" size={35} color="blue" />
      <button className="text-blue-700 font-semibold">Sign in</button>
    </div>
  );
}

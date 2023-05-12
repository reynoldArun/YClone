export default function Footer() {
  return (
    <footer className="my-4">
      <div className="w-[60%]">
        <ul className="flex text-sm font-semibold space-x-2 flex-wrap">
          <li className="pl-2">About</li>
          <li>Press</li>
          <li>Copyright</li>
          <li>Contact us</li>
          <li>Creators</li>
          <li>Advertise</li>
          <li>Developers </li>
        </ul>
      </div>

      <div className="w-[60%]">
        <ul className="flex mt-4 text-sm font-semibold space-x-2 flex-wrap">
        <li className="pl-2">Terms</li>
        <li>Privacy</li>
        <li>Policy & Safety</li>
        <li>How YouTube worksTest new features </li>
        </ul>
      </div>
    </footer>
  );
}

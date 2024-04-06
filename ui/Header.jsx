import { ButtonUI } from "./Button";
import Logo from "./Logo";

function Header() {
  return (
    <nav className="flex justify-between items-center border-1 shadow-md">
      <div className="flex justify-between items-center">
        <Logo />
        <ul className="xl:flex justify-between items-center space-x-10 hidden">
          <li className="font-sans text-black/60 font-semibold cursor-pointer hover:border-b-4 hover:border-b-pink-500 pb-2 transition-all ease-in-out">
            Inpiration
          </li>
          <li className="font-sans text-black/60 font-semibold cursor-pointer hover:border-b-4 hover:border-b-pink-500 pb-2 transition-all ease-in-out">
            Find Work
          </li>
          <li className="font-sans text-black/60 font-semibold cursor-pointer hover:border-b-4 hover:border-b-pink-500 pb-2 transition-all ease-in-out">
            Learn Design
          </li>
          <li className="font-sans text-black/60 font-semibold cursor-pointer hover:border-b-4 hover:border-b-pink-500 pb-2 transition-all ease-in-out">
            Go Pro
          </li>
          <li className="font-sans text-black/60 font-semibold cursor-pointer hover:border-b-4 hover:border-b-pink-500 pb-2 transition-all ease-in-out">
            Hire Designers
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between space-x-10 mx-9">
        <input
          type="text"
          placeholder="Search"
          className="hidden xl:block py-4 px-5 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-slate-200 transition-all ease-in-out"
        />
        <div className="relative hidden xl:block text-gray-400 hover:text-pink-500 cursor-pointer">
          <div>
            <i className="fa-solid fa-briefcase text-4xl"></i>
          </div>
          <div className=" absolute top-5 left-5">
            <i className="fa-solid fa-circle-xmark p-1 bg-white rounded-full"></i>
          </div>
        </div>
        <img
          src="../src/assets/profile_image.png"
          className="w-16 h-16 rounded-full"
          alt=""
        />

        <div>
          <ButtonUI
            className="hidden xl:block"
            text="Upload"
            disable={false}
            color="bg-pink-500"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;

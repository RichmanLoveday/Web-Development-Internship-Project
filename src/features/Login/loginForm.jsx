import { Link } from "react-router-dom";
import { ButtonUI } from "../../../ui/Button";

function LoginForm() {
  return (
    <form action="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 space-y-12 md:space-y-0 mt-8">
        <div>
          <label className=" text-black font-bold text-2xl" htmlFor="">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="py-4 px-5 w-full mt-1 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-slate-200 transition-all ease-in-out"
          />
        </div>
        <div>
          <label className=" text-black font-bold text-2xl" htmlFor="">
            <i className="fa-solid fa-circle-exclamation mr-2 text-red-400"></i>
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="py-4 px-5 w-full mt-1 rounded-md bg-red-300/50 placeholder:text-red-500 text-red-500 focus:outline-none focus:ring focus:ring-red-300/70 transition-all ease-in-out"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 py-4 mt-5">
        <div>
          <label className=" text-black font-bold text-2xl" htmlFor="">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="py-4 px-5 w-full mt-1 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-slate-200 transition-all ease-in-out"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 py-4 mt-5">
        <div>
          <label className=" text-black font-bold text-2xl" htmlFor="">
            Password
          </label>
          <input
            type="text"
            placeholder="6+ characters"
            className="py-4 px-5 w-full mt-1 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-slate-200 transition-all ease-in-out"
          />
        </div>
      </div>

      <div className="flex items-baseline space-x-2">
        <input type="checkbox" className=" p-10" />
        <p>
          Creating an account means you are ok with our{" "}
          <span className="text-blue-800">
            Terms of Service, Privacy Policy,
          </span>
          and our default
          <span className=" text-blue-800">Notification Settings.</span>
        </p>
      </div>

      <Link to="/profile">
        <ButtonUI
          text="Create Account"
          disable={false}
          color="bg-pink-500"
          className="mt-10 mx-auto"
        />
      </Link>

      <div className="mt-8 w-8/12">
        <p className="text-black/50 text-2xl">
          This site is protected by reCAPTCHA and the Google
          <span className="text-blue-800"> Privacy Policy</span> and{" "}
          <span className="text-blue-800">Terms of Service</span> apply
        </p>
      </div>
    </form>
  );
}

export default LoginForm;

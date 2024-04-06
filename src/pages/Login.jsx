import LoginForm from "../features/Login/loginForm";
import Logo from "../../ui/Logo";
import LoginImg from "../assets/login_image.png";

function Login() {
  return (
    <main className="grid sm:grid-cols-1 md:grid-cols-3  min-h-full font-sans">
      <div className="px-10" style={{ background: "#FFD580" }}>
        <div className="my-10">
          <Logo />
          <h1
            className="py-5 text-4xl text-center md:text-start font-extrabold leading-snug lato-bold"
            style={{ color: "#795548" }}
          >
            Discover the world's top <br /> Designers And & Creatives
          </h1>
        </div>
        <div className="mb-56">
          <img src={LoginImg} className="w-full" alt="" />
          <a
            href="#"
            className="underline cursor-pointer mx-auto"
            style={{ color: "#795548" }}
          >
            Art By Peter Tarkar
          </a>
        </div>
      </div>
      <div className="md:col-span-2 xl:w-10/12 mx-auto">
        <div className="flex justify-end items-center p-10">
          <p>
            <span className="">Already a member? </span>
            <a href="" className="text-blue-600">
              Sign In
            </a>
          </p>
        </div>

        <div className="w-full md:w-10/12  mx-auto p-12">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold">Sign up to Dribble</h1>
            <p className=" text-red-400">
              <li>Username has already been taken</li>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export default Login;

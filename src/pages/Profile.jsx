import { Link } from "react-router-dom";
import { ButtonUI } from "../../ui/Button";
import MinorHeader from "../../ui/MinorHeader";
import { PageTitle } from "../../ui/PageTittle";

export function Profile() {
  return (
    <>
      <MinorHeader hidden="hidden" />
      <main className="w-full md:w-1/2 mx-auto container p-10 my-5">
        <PageTitle
          headingText="Welcome! Let's Create Your Profile"
          subText="Let's others get to know about you better! You can do these later"
        />

        <div className="mt-16">
          <h1 className="text-3xl font-bold font-sans">Add an avatar</h1>

          <div className="flex justify-start items-start space-x-16 mt-10 mb-24 p-5">
            <img
              className=" w-52 h-52 rounded-full"
              src="../src/assets/profile_image.png"
              alt=""
            />
            <div className="space-y-5 my-5">
              <button
                className={` bg-white text-black font-sans font-semibold px-8 py-3 text-center rounded-xl border-gray-500/10 border-2 outline-gray-500/10 focus:outline-0 focus:ring focus:ring-gray-300  transition-all ease-in-out`}
              >
                Choose Image
              </button>
              <div className="space-x-4 font-semibold text-gray-400">
                <i className="fa-solid fa-angle-right"></i>
                <p className="inline-block">Or choose one our default</p>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h1 className="text-3xl font-bold font-sans">Add your location</h1>
            <div className="grid grid-cols-1 gap-6 py-4 mt-5">
              <div>
                <input
                  type="email"
                  placeholder="Enter Location"
                  className="py-4 w-full mt-1 outline-none font-semibold font-sans focus:outline-0 placeholder:font-semibold placeholder:font-sans border-b"
                />
              </div>
            </div>
          </div>

          <div className="my-16">
            <Link to="/what_brings_you">
              <ButtonUI
                text="Next"
                disable={false}
                color="bg-pink-500"
                className="px-36"
              />
            </Link>
            <p className=" ms-20 text-xl font-semibold font-sans text-gray-400 my-3">
              Or Press RETURN
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

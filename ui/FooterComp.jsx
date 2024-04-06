import Logo from "./Logo";

function FooterComp() {
  return (
    <footer className=" bg-gray-100/50 p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7  items-start border-b mb-10">
        <div className="px-5 xl:col-span-2 text-center md:text-left">
          <Logo />
          <p className="text-2xl font-semibold font-sans">
            Dribble is the world leading <br /> community for creatives to
            share, grow and get hired.
          </p>
          <div className="space-x-8 my-6">
            <i className=" text-4xl fa-brands fa-dribbble"></i>
            <i className=" text-4xl fa-brands fa-twitter"></i>
            <i className=" text-4xl fa-brands fa-instagram"></i>
            <i className=" text-4xl fa-brands fa-pinterest"></i>
            <i className=" text-4xl fa-brands fa-facebook"></i>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-sans font-bold">For Designer</h1>
          <ul className="space-y-10 my-7 text-2xl font-semibold font-sans">
            <li>Go Pro!</li>
            <li>Expore design work</li>
            <li>Design blog</li>
            <li>Overtime Podcast</li>
            <li>Playoffs</li>
            <li>Weekly Warmup-Up</li>
            <li>Refer a Friend</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-sans font-bold">Hire Designers</h1>
          <ul className="space-y-10 my-7 text-2xl font-semibold font-sans">
            <li>Post a job opening</li>
            <li>Post a freelance project</li>
            <li>Search for designers</li>
          </ul>
          <h1 className="text-2xl font-sans font-bold mt-12">Brands</h1>
          <ul className="space-y-10 my-7 text-2xl font-semibold font-sans">
            <li>Advertise with us</li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-sans font-bold">Company</h1>
          <ul className="space-y-10 my-7 text-2xl font-semibold font-sans">
            <li>About</li>
            <li>Carears</li>
            <li>Media Kits</li>
            <li>Testimonies</li>
            <li>API</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-sans font-bold">Directories</h1>
          <ul className="space-y-10 my-7 text-2xl font-semibold font-sans">
            <li>Design Jobs</li>
            <li>Design for hires</li>
            <li>Freelance designers for hire</li>
            <li>Tag</li>
            <li>Places</li>
          </ul>
          <h1 className="text-2xl font-sans font-bold mt-12">Design Assets</h1>
          <ul className="space-y-10 my-7 text-2xl font-semibold font-sans">
            <li>Dribble Marketplace</li>
            <li>Creative Market</li>
            <li>Fontspring</li>
            <li>Font Squirrel</li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-sans font-bold">Design Resourse</h1>
          <ul className="space-y-10 my-7 text-2xl font-semibold font-sans">
            <li>Freelancing</li>
            <li>Design Hiring</li>
            <li>Design Portfolio</li>
            <li>Design Education</li>
            <li>Creative Process</li>
            <li>Design Industry Trends</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap space-y-2 justify-between items-center">
        <div>
          <i className="fa-regular fa-copyright"></i>
          <p className="inline-block mx-2">2023 Dribble. All right Reserved</p>
        </div>
        <div className="font-sans">
          <p>
            <span className="mx-1 font-bold">20,501,853</span>
            shots dribbled{" "}
            <i className=" text-4xl fa-brands fa-dribbble text-pink-600"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComp;

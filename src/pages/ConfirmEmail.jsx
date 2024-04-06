function ConfirmEmail() {
  return (
    <div className="text-center my-20 w-full xl:w-1/2 mx-auto p-3">
      <h1 className="text-5xl xl:text-6xl font-bold font-sans">
        Please verify your email...
      </h1>

      <div className="my-12 relative w-1/6 mx-auto">
        <div>
          <i className="fa-solid fa-envelope text-9xl text-gray-400"></i>
        </div>
        <div className="absolute top-0 -right-10 md:right-7 xl:right-1 text-pink-500">
          <i className="fa-solid fa-circle-check rounded-full p-1 bg-white text-5xl"></i>
        </div>
      </div>

      <div className="px-3">
        <p className="my-6 font-sans text-black/60 font-semibold">
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <span className="my-6 font-sans font-bold">account@refero.design</span>
        <p className="my-6 font-sans text-black/60 font-semibold">
          Click the confirmation link in your email to begin using Dribble
        </p>
        <p className="my-6 font-sans text-black/60 font-semibold">
          Didn't receive email, check your folder may be caught by a filter. If
          you still don't see it, you can
          <span className="text-pink-500 ms-1">resend confimation email</span>
        </p>
        <p className="my-6 font-sans text-black/60 font-semibold">
          Wrong email address?
          <span className="text-pink-500 ms-1">Change it.</span>
        </p>
      </div>
    </div>
  );
}

export default ConfirmEmail;

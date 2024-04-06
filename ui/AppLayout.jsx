import { Outlet } from "react-router-dom";
import Header from "./Header";
import FooterComp from "./FooterComp";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="p-10 my-5">
        <div className="container w-full md:w-10/12 mx-auto">
          <Outlet />
        </div>
      </main>
      <FooterComp />
    </>
  );
}

export default AppLayout;

import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="bg-xt">
        <Nav />
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

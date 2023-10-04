import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const RootLayout = () => {
  return (
    <div className="pb-16 md:pb-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

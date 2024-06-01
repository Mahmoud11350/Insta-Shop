import logoImg from "../assets/img/Logo.png";
import AuthNavbar from "./AuthNavbar";
import MobileNavbar from "./MobileNavbar";
import WebNavbar from "./WebNavbar";

const Navbar = () => {
  return (
    <>
      <AuthNavbar />
      <nav className=" h-16 bg-green-400/10 ">
        <div className="h-16 flex items-center justify-between wrapper">
          <div className="mr-20">
            <img src={logoImg} className="w-24" />
          </div>
          <div className="flex items-center">
            <MobileNavbar />
            <WebNavbar />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

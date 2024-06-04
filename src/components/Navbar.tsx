import logoImg from "../assets/img/Logo.png";
import WebNavbar from "./WebNavbar";
import AuthNavbar from "./AuthNavbar";

const Navbar = () => {
  return (
    <>
      <nav className=" h-16 bg-green-400/10 flex items-center  ">
        <div className="flex items-center  justify-between flex-1 wrapper">
          <div className="mr-20">
            <img src={logoImg} className="w-24" />
          </div>
          <WebNavbar />
          <AuthNavbar />
        </div>
      </nav>
    </>
  );
};
export default Navbar;

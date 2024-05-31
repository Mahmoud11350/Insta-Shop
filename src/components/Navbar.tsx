import logoImg from "../assets/img/Logo.png";
import barImg from "../assets/img/menu.png";
import AuthNavbar from "./AuthNavbar";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  return (
    <>
    <AuthNavbar/>
    <nav className=" h-16 ">
      <div className="h-16 flex items-center justify-between wrapper">
          <div className="mr-20">
            <img src={logoImg} className="w-24" />
          </div>
          <div>
            <MobileNavbar/>
          </div>
      </div>
    </nav>
    </>
  );
};
export default Navbar;
{/* <div>
          <img src={barImg} className="w-16 cursor-pointer" />
        </div> */}
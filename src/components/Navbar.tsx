import logoImg from "../assets/img/Logo.png";
import barImg from "../assets/img/menu.png";
const Navbar = () => {
  return (
    <nav className=" h-16 ">
      <div className="h-16 flex items-center justify-between wrapper">
        <div className="flex items-center">
          <div className="mr-20">
            <img src={logoImg} className="w-24" />
          </div>
          <div>links</div>
        </div>
        <div>
          <img src={barImg} className="w-16 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

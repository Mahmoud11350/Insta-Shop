import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const AuthNavbar = () => {
  return (
    <div className="flex gap-4 items-center ">
      <MobileNavbar />
      <div>
        <SignedOut>
          <div className="flex gap-4 items-center">
            <FaSignInAlt />
            <Link to="/sign-in">Sign In </Link>
            <Link to="/register">Register</Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton defaultOpen />
        </SignedIn>
      </div>
    </div>
  );
};

export default AuthNavbar;

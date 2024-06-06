import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const AuthNavbar = () => {
  const { user } = useUser();

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
          <div className="flex gap-4 items-center">
            <p className="p-regular-18">{user?.fullName}</p>
            <UserButton defaultOpen />
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default AuthNavbar;

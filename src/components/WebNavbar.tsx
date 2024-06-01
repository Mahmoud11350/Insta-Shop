import { links } from "@/utils/types";
import { NavLink } from "react-router-dom";
const WebNavbar = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center space-x-5">
        {links.map((link) => {
          return (
            <li>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-500 px-4 py-2 rounded text-white font-semibold"
                    : ""
                }
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WebNavbar;

import { Link } from "react-router-dom";
import barImg from "../assets/img/menu.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { links } from "@/utils/types";
const MobileNavbar = () => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img src={barImg} className="w-10" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link) => {
            return (
              <Link to={link.href}>
                <DropdownMenuItem>{link.label}</DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavbar;

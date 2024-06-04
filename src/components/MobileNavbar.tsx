import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
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
        <DropdownMenuTrigger className="flex items-center">
          <IoMenu size={28} />
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

import {Bell, Moon, Search, SunMoon} from "lucide-react"
import Image from "next/image";
import { ModeToggle } from "./theme/ModeToggle";

const NavBar = () => {
    return (
        <nav className="flex items-center gap-2 content-between">
            <div className="flex items-center gap-4">
                <Search />
                <p> book name, author, edition..</p>
            </div>
            <div className="ml-auto flex items-center gap-2">            
                <Bell />
                <ModeToggle />
            </div>
        </nav>
    );
}
 
export default NavBar;
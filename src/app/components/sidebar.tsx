import logo from "../../assets/images/image.png";
import type { StaticImageData } from 'next/image';
import { NavItem } from "./nav-item";

export const Sidebar = () => {
    return (
        <div className="sidebarWrap">
           <nav className="w-full">
                <ul className="space-y-2 font-medium w-full">
                    <li>
                        <NavItem href="/currency" label="Currency" classname='block text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md' />
                    </li>
                    <li>
                        <NavItem href="/whitelist" label="Whitelist" classname='block text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md' />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
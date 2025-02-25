'use client';

import { Users, Calendar, FolderClosed } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import logo from '../../assets/images/logo.png';

// Menu items.
const items = [
  {
    title: "SubAdmin",
    path: "/",
    icon: Users,
  },
  {
    title: "Token",
    path: "/currency",
    icon: Calendar,
  },
  {
    title: "Whitelist",
    path: "/whitelist",
    icon: FolderClosed,
  },
]

type props = {
  classname: any;
}

export const AppSidebar = ({classname} : props) => {
  
  const pathname = usePathname();

  return (
    <Sidebar className={`${classname}`}>
      <SidebarContent className="text-white h-screen border-r-1 border-white-500" style={{ backgroundColor: "#1f2937", color: "white", height: "100vh" }}>
        <SidebarGroup className="py-5 gap-4">
          <SidebarGroupLabel className="mb-4 p-0 justify-center">
            <img src={logo.src} alt="sss" className="" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
            {items.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.path}
                        className={`py-2 transition-opacity duration-200 flex items-center gap-2 px-4 hover:bg-[#374151] hover:text-white
                          ${isActive ? "bg-[#111827] text-white font-semibold" : "opacity-50 hover:opacity-100"}`}
                      >
                        <item.icon className="w-6 h-6" />
                        <span className="text-base">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

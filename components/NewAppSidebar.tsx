"use client"

import * as React from "react"
import {
    GalleryVerticalEnd,
    Home,
    Search,
    Settings
} from "lucide-react"
import { MdCollectionsBookmark } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";



import { NavMain } from "@/components/NavMain"
// import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { UserInfo } from "./UserInfo"
import Link from "next/link";

// This is sample data.
const data = {
    title: "Library App",
    logo: GalleryVerticalEnd,
        isActive: true,
        links: [
            {
             title: "Home",
             url: "/",
             icon: Home,
           },
           {
             title: "Collection",
             url: "/collection",
             icon: MdCollectionsBookmark,
           },
           {
             title: "Favorite",
             url: "/favorite",
             icon: FaBookmark,
           },
           {
             title: "Search",
             url: "#",
             icon: Search,
           },
           {
             title: "Settings",
             url: "setting",
             icon: Settings,
           },
        ]
    }

export function NewAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row items-center gap-2 mb-4">
        <data.logo />
        {/* <h4>Library</h4> */}
      </SidebarHeader>
      <SidebarContent>
        {
          data.links?.map((item) => (
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuSubButton asChild>
                  <div className="flex items-center gap-">
                    {item.icon && <item.icon />}
                          <Link href={item.url}>                          
                            <span>{item.title}</span>
                          </Link>
                  </div>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
            </SidebarMenu>
          ))
        }        
      </SidebarContent>

      <SidebarFooter>
        <UserInfo />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

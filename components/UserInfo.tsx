import {
    SidebarFooter,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { ChevronUp, User2 } from "lucide-react"
import Image from "next/image"

export function UserInfo() {
    return (
         <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center gap-2">
                  <Image 
                    className="rounded-full"
                    src="/assets/user-profile1.avif"
                    alt="user"
                    width={40}
                    height={50}
                />
                  <p>Ahmed Dicko</p>                  
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    )
}
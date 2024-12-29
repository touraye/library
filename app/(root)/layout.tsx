import NavBar from "@/components/NavBar";
import { NewAppSidebar } from "@/components/NewAppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            
            <SidebarProvider>
                <NewAppSidebar />
                <SidebarTrigger />
                <SidebarInset>
                    <NavBar />
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}
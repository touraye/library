import NavBar from '@/components/NavBar'
import { NewAppSidebar } from '@/components/NewAppSidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <SidebarProvider>
            <NewAppSidebar />
            <SidebarTrigger />
            <SidebarInset>
                <NavBar />
        <main className='flex items-center'>                
				<section className='h-screen py-3 px-3'>
					{children}
				</section>
			</main>       
            </SidebarInset>
        </SidebarProvider>
	)
}


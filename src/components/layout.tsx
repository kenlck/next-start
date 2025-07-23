import { auth } from "@/lib/auth";
import { AppSidebar } from "./sidebar/app-sidebar";
import { Separator } from "./ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { redirect } from "next/navigation";

export async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  // console.log(session);
  if (!session) {
    // return children;
    return redirect("/");
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <p className="font-medium">Next Start</p>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

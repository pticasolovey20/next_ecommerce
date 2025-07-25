import { NAVIGATION } from "@/constants/navigation";

import { SidebarProvider, SidebarTrigger, Sidebar } from "@/ui/sidebar";

const AppSidebar = () => {
  return (
    <SidebarProvider>
      <SidebarTrigger className="md:hidden" />

      <Sidebar>
        <SidebarTrigger />

        <nav className="mt-4">
          <ul className="flex flex-col gap-2">
            {NAVIGATION.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-2xl font-semibold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Sidebar>
    </SidebarProvider>
  );
};

export default AppSidebar;

import { NAVIGATION } from "@/constants/navigation";

import AppSidebar from "@/components/AppSidebar";

const Header = () => {
  return (
    <header className="h-16 flex items-center p-4 bg-muted">
      <AppSidebar />

      <div className="max-w-screen-2xl w-full flex items-center justify-center mx-auto">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NAVIGATION.map(({ label, href }) => (
              <li key={label} className="px-4">
                <a href={href} className="text-xl font-semibold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

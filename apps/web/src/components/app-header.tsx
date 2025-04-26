import Link from "next/link";

import { SigninButton } from "./signin-button";

const navItems = [
  {
    id: "1",
    href: "/",
    label: "Home",
  },
  {
    id: "2",
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    id: "3",
    href: "/profile",
    label: "Perfil",
  },
];

export const AppHeader = async () => {
  return (
    <header className="border-b flex gap-3 items-center justify-center h-16 absolute top-0 right-0 left-0 w-[calc(100vw-1.063)]">
      <div className="p-4 max-w-7xl w-full">
        <div className="flex items-center justify-between">
          <nav
            className="flex items-center gap-4"
            aria-label="Navegação principal do sistema"
          >
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <SigninButton />
        </div>
      </div>
    </header>
  );
};

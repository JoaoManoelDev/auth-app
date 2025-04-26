import Link from "next/link";

import { SigninButton } from "./signin-button";

export const AppHeader = () => {
  return (
    <header className="border-b flex gap-3 items-center justify-center h-16">
      <div className="p-4 max-w-7xl w-full">
        <div className="flex items-center justify-between">
          <nav
            className="flex items-center gap-4"
            aria-label="Navegação principal do sistema"
          >
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>

          <SigninButton />
        </div>
      </div>
    </header>
  );
};

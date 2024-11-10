import React from "react";
import Link from "next/link";  // Next.js Link bileşenini import et

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-semibold">Logo</div>
        <nav className="space-x-6">
          <Link href="/menu1" className="hover:text-gray-400">Menu1</Link>
          <Link href="/menu2" className="hover:text-gray-400">Menu2</Link>
          <Link href="/menu3" className="hover:text-gray-400">Menu3</Link>
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="bg-gray-800 text-white w-64 p-4">
          <ul className="space-y-4">
            <li><Link href="/menu1" className="block hover:text-gray-400">Menu1</Link></li>
            <li><Link href="/menu2" className="block hover:text-gray-400">Menu2</Link></li>
            <li><Link href="/menu3" className="block hover:text-gray-400">Menu3</Link></li>
          </ul>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;

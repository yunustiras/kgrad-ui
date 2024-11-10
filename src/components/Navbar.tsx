import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">Logo</div>
      <nav className="space-x-6">
        <a href="#" className="hover:text-gray-400">Menu1</a>
        <a href="#" className="hover:text-gray-400">Menu2</a>
        <a href="#" className="hover:text-gray-400">Menu3</a>
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Header() {
  const menu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Explore', path: '/' },
    { id: 3, name: 'Contact Us', path: '/' }
  ];

  return (
    <header className="bg-white shadow-md px-2 flex items-center justify-between">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* الشعار */}
        <div className="flex items-center gap-2">
          <Image src="/assets/image/logo.png" width={100} height={40} alt="logo" />

        </div>

        {/* القائمة */}
        <nav>
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Button>Get started</Button>

    </header>
  );
}

export default Header;

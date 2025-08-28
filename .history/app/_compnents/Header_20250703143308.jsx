import React from 'react'
import Image from 'next/image'

function Header() {
  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/" },
    { id: 3, name: "Contact Us", path: "/" }
  ];

  return (
    <div className="p-4 shadow-md">
      <div className="flex items-center justify-between gap-10 Bg-">
        {/* الشعار */}
        <Image src="/assets/image/logo.png" width={100} height={100} alt="logo" />

        {/* القائمة */}
        <ul className="flex gap-6 list-none">
          {menu.map((item) => (
            <li key={item.id} className="text-gray-700 cursor-pointer hover:text-blue-600 transition">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;

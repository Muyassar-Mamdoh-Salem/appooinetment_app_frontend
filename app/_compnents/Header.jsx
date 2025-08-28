"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// مكتبة kinde
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// مكتبة shadcn
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const menu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Explore', path: 'Explore' },
    { id: 3, name: 'Contact Us', path: 'Contact Us' }
  ];

  const { user } = useKindeBrowserClient();

  // التأكد من أن المكون يعمل على العميل فقط
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="bg-white shadow-md px-2 flex items-center justify-between">
      {/* الشعار والقائمة */}
      <div className="flex items-center">
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
                  className="hover:text-lime-600 transition-all duration-200 cursor-pointer hover:scale-105"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* تسجيل الدخول أو المستخدم */}
      {isClient && user ? (
        user.picture && (
          <Popover>
            <PopoverTrigger asChild>
              <Image
                src={user.picture}
                width={40}
                height={40}
                alt="user"
                className="rounded-full cursor-pointer border border-gray-300 hover:scale-105 transition"
              />
            </PopoverTrigger>

            <PopoverContent className="w-44 p-3 rounded-xl shadow-md bg-white flex flex-col space-y-2 text-sm">
              <ul className="space-y-2">
                <li>
                  <LogoutLink>
                    <span className="block px-3 py-1.5 rounded-md hover:bg-lime-300 hover:text-red-500 transition cursor-pointer">
                      Logout
                    </span>
                  </LogoutLink>
                </li>
                <li>
                  <span className="block px-3 py-1.5 rounded-md hover:bg-lime-300 cursor-pointer">
                    My Profile
                  </span>
                </li>
                <Link href={"/my-Booking"}>
                  <span className="block px-3 py-1.5 rounded-md hover:bg-lime-300 cursor-pointer">
                    My Booking
                  </span>
                </Link>
              </ul>
            </PopoverContent>
          </Popover>
        )
      ) : (
        <LoginLink>
          <Button className="text-white rounded-lg">Get started</Button>
        </LoginLink>
      )}
    </header>
  );
}

export default Header;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Kinde
import {
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// shadcn
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { id: 3, name: "Contact Us", path: "/contact" },
  ];

  const { user } = useKindeBrowserClient();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md px-2 flex items-center justify-between">
      {/* Logo & Menu */}
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <Image src="/assets/image/logo.png" width={100} height={40} alt="logo" />
        </div>

        <nav>
          <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
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

      {/* Auth buttons */}
      {isClient && user ? (
        <Popover>
          <PopoverTrigger asChild>
            <Image
              src={user?.picture || "/assets/image/avatar.png"}
              width={40}
              height={40}
              alt={user?.given_name || "user"}
              className="rounded-full cursor-pointer border border-gray-300 hover:scale-105 transition"
            />
          </PopoverTrigger>

          <PopoverContent className="w-44 p-3 rounded-xl shadow-md bg-white dark:bg-gray-800 flex flex-col space-y-2 text-sm">
            <ul className="space-y-2">
              <li className="px-3 py-1.5 text-gray-700 dark:text-gray-200 font-medium border-b">
                {user?.given_name || "Guest"}
              </li>
              <li>
                <LogoutLink>
                  <span className="block px-3 py-1.5 rounded-md hover:bg-lime-300 hover:text-red-500 transition cursor-pointer">
                    Logout
                  </span>
                </LogoutLink>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="block px-3 py-1.5 rounded-md hover:bg-lime-300 cursor-pointer"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/my-booking"
                  className="block px-3 py-1.5 rounded-md hover:bg-lime-300 cursor-pointer"
                >
                  My Booking
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          <Button className="text-white rounded-lg">Get started</Button>
        </LoginLink>
      )}
    </header>
  );
}

export default Header;

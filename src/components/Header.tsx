"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GithubIcon from "./icons/Github";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const pathname = usePathname(); // App router 방식에서는 useRouter() 대신 usePathname()을 사용합니다.

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 w-full h-20 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          HoonDev
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-5">
            {navItems.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                        : "text-gray-700 hover:text-blue-500"
                    } pb-1`}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <GithubIcon />
      </div>
    </header>
  );
}

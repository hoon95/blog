"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import GithubIcon from "./icons/Github";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const pathname = usePathname(); // App router : useRouter() -> usePathname()

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          HoonLog
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="relative flex space-x-5">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <NavigationMenuItem key={href} className="relative">
                  <NavigationMenuLink asChild>
                    <Link
                      href={href}
                      className={`relative pb-2 transition-colors duration-300 ${
                        isActive
                          ? "text-blue-500 font-semibold"
                          : "text-gray-700 hover:text-blue-500"
                      }`}
                    >
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <GithubIcon />
      </div>
    </header>
  );
}

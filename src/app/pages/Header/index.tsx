"use client";

import { useState } from "react";
import Link from "next/link";
import { brandName,navData } from "../../pages/Header/Header";
import { ShoppingBasket, User, Search, Menu, X } from "lucide-react";
import  SidebarApp from "../sidebar/SidebarApp"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="flex items-center justify-between px-8 py-6">
         <SidebarApp/>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-12 font-[Poppins] text-[1.063rem] font-medium">
          {navData.map((data) => (
            <li
              key={data.title}
              className="cursor-pointer border-b-2 border-transparent transition hover:border-black"
            >
              {data.title}
            </li>
          ))}

          <li className="flex items-center gap-4">
            <ShoppingBasket className="w-5 h-5 cursor-pointer" />
            <Link href="/login">
              <User className="w-5 h-5 cursor-pointer" />
            </Link>
          </li>

          {/* Search (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Search className="w-6 h-6 cursor-pointer" />
            <input
              type="text"
              placeholder="Search store"
              className="w-75 h-[2.813rem] border-b border-black bg-transparent outline-none"
            />
          </div>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden mobile absolute top-4 right-4">
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden "
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
      <header className="w-full">
         <nav className="flex items-center justify-between px-8 py-6">
         <SidebarApp/>
         <div className="md:hidden fixed inset-x-0 top-10 z-50 bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 pb-8 font-[Poppins] text-[1.063rem] font-medium">
            {navData.map((data) => (
              <li
                key={data.title}
                className="cursor-pointer border-b-2 border-transparent transition hover:border-black"
              >
                {data.title}
              </li>
            ))}
                
            <div className="flex gap-6 items-center">
              <ShoppingBasket className="w-5 h-5" />
              <Link href="/login">
                <User className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Search className="w-6 h-6" />
              <input
                type="text"
                placeholder="Search store"
                className="w-[16rem] h-[2.813rem] border-b border-black bg-transparent outline-none"
              />
            </div>
             
          </ul>
        </div>
       </nav>
      </header>
      )}
    </header>
  );
}

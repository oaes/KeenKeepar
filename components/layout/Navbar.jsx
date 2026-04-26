"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="navbar mx-auto w-full max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost" aria-label="Open navigation menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-1 mt-3 w-56 rounded-box border border-slate-200 bg-base-100 p-2 shadow"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={isActive ? "active bg-[#] text-white" : "text-slate-700"}
                    >
                      <Icon size={14} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost px-2 text-2xl   text-[#243746] hover:text-white hover:bg-[#1f5a49] ">
            <span><span className="font-black">Keen</span>Keeper</span>
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`btn btn-sm border transition-colors ${
                      isActive
                        ? "bg-[#1f5a49] text-white border-[#1f5a49]"
                        : "btn-ghost border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Icon size={14} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
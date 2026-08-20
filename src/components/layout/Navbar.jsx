"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="w-full border-b">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8"
      >
        {/*  */}
        <Link
          href="/"
          onClick={closeMenu}
          className="rounded text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          JSNotes
        </Link>

        {/*  */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/learn" className="hover:underline">
            Learn
          </Link>

          <Link href="/examples" className="hover:underline">
            Examples
          </Link>

          <Link href="/playground" className="hover:underline">
            Playground
          </Link>

          <a
            href="https://js-executer-by-anish.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
          >
            JS Executor ↗
          </a>
        </div>

        {/*  */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-md p-2 hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 w-6 bg-black" />
          <span className="mt-1.5 block h-0.5 w-6 bg-black" />
          <span className="mt-1.5 block h-0.5 w-6 bg-black" />
        </button>
      </nav>

      {/* */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between border-b px-4 py-4">
            <Link href="/" onClick={closeMenu} className="text-xl font-bold">
              JSNotes
            </Link>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-md px-3 py-1 text-2xl hover:bg-gray-100"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* */}
          <div className="mx-auto flex max-w-md flex-col px-6 py-10">
            <Link
              href="/learn"
              onClick={closeMenu}
              className="border-b py-5 text-2xl font-semibold"
            >
              Learn
            </Link>

            <Link
              href="/examples"
              onClick={closeMenu}
              className="border-b py-5 text-2xl font-semibold"
            >
              Examples
            </Link>

            <Link
              href="/playground"
              onClick={closeMenu}
              className="border-b py-5 text-2xl font-semibold"
            >
              Playground
            </Link>

            <a
              href="https://js-executer-by-anish.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-8 rounded-lg bg-black px-5 py-4 text-center font-medium text-white"
            >
              Open JS Executor ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

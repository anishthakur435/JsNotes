"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="rounded text-xl font-bold tracking-tight transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          JSNotes
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/learn"
            className="transition-colors hover:text-blue-500"
          >
            Learn
          </Link>

          <Link
            href="/examples"
            className="transition-colors hover:text-blue-500"
          >
            Examples
          </Link>

          <Link
            href="/playground"
            className="transition-colors hover:text-blue-500"
          >
            Playground
          </Link>

          <a
            href="https://js-executer-by-anish.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-4 py-2 font-semibold transition-colors hover:bg-foreground hover:text-background"
          >
            JS Executor ↗
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-md p-2 transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
        </button>
      </nav>

      {/* Mobile Full Screen Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 min-h-screen bg-background md:hidden"
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between border-b px-4 py-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-xl font-bold"
            >
              JSNotes
            </Link>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-md px-3 py-1 text-2xl transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mx-auto flex max-w-md flex-col px-6 py-10">
            <Link
              href="/learn"
              onClick={closeMenu}
              className="border-b py-5 text-2xl font-semibold transition-colors hover:text-blue-500"
            >
              Learn
            </Link>

            <Link
              href="/examples"
              onClick={closeMenu}
              className="border-b py-5 text-2xl font-semibold transition-colors hover:text-blue-500"
            >
              Examples
            </Link>

            <Link
              href="/playground"
              onClick={closeMenu}
              className="border-b py-5 text-2xl font-semibold transition-colors hover:text-blue-500"
            >
              Playground
            </Link>

            <a
              href="https://js-executer-by-anish.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-8 rounded-lg bg-foreground px-5 py-4 text-center font-medium text-background transition-opacity hover:opacity-90"
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
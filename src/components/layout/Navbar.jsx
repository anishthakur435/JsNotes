import Link from "next/link";

function Navbar() {
  return (
    <header className="border-b w-full">
      <nav
        aria-label="Main navigation"
        className="flex w-full max-w-7xl mx-auto items-center justify-between px-4 md:px-8 py-4"
      >
        <Link
          href="/"
          className="text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          JSNotes
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/learn">Learn</Link>
          <Link href="/playground">Playground</Link>
          <Link href="/examples">Examples</Link>
          <Link
            href="https://js-executer-by-anish.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JS Executor
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

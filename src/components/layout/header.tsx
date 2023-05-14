import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <g fillRule="nonzero" fill="none">
                  <g className="fill-blue-50" transform="translate(3 3)">
                    <circle cx="5" cy="5" r="5" />
                    <circle cx="19" cy="5" r="5" />
                    <circle cx="5" cy="19" r="5" />
                    <circle cx="19" cy="19" r="5" />
                  </g>
                  <g className="fill-sky-300">
                    <circle cx="15" cy="5" r="5" />
                    <circle cx="25" cy="15" r="5" />
                    <circle cx="15" cy="25" r="5" />
                    <circle cx="5" cy="15" r="5" />
                  </g>
                </g>
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li className="ml-3">
                <Link
                  className="btn-sm group inline-flex items-center bg-slate-800 text-slate-100 shadow-sm hover:bg-slate-900"
                  href="/apply"
                >
                  Get your card
                  <span className="ml-2 tracking-normal text-sky-400 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    <svg
                      className="fill-current"
                      width="12"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

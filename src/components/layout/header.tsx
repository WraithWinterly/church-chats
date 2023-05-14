import Image from "next/image";
import Link from "next/link";
import logo from "~/assets/icon.png";

export default function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="mr-4  shrink-0 items-center gap-2 text-white">
            {/* Logo */}
            <Link
              className="flex items-center gap-2"
              href="/"
              aria-label="Cruip"
            >
              <Image
                src={logo}
                alt="Church chats logo"
                width={256}
                height={256}
                className="w-10"
              />
              <span className="font-semibold">Church Chats</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow flex-wrap items-center justify-end gap-8 font-semibold text-slate-100">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="ml-3">
                <Link
                  className="btn group inline-flex items-center bg-slate-800 text-slate-100 shadow-sm hover:bg-slate-900"
                  href="/apply"
                >
                  Join the waitlist
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

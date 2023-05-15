import Image from "next/image";
import Link from "next/link";
import logo from "~/assets/icon.png";
import { useAppContext } from "../context/app-context";

export default function Header() {
  const ctx = useAppContext();
  const { setSidebarOpen } = ctx;
  return (
    <header className="absolute z-10 w-full">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
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
              <span className="hidden font-semibold md:inline-block">
                Church Chats
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow flex-wrap items-center justify-end gap-6 font-semibold text-slate-100 md:gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="hidden md:block">
                <button
                  className="btn group items-center bg-slate-800 text-slate-100 shadow-sm hover:bg-slate-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  Join the Waitlist
                </button>
              </li>
              <li className="block md:hidden">
                <button
                  className="group items-center text-slate-100 shadow-sm hover:bg-slate-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import Illustration from "~/assets/fintech/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-primary-3">
      <div className="flex w-full flex-col items-center justify-between gap-12 px-6 py-24 text-center md:flex-row md:gap-0 md:text-start xl:px-32">
        <h1 className="text-bold text-5xl text-white">
          Join the waitlist for{" "}
          <span className="text-primary-2"> Church Chats </span>
        </h1>
        <div>
          <Link
            className="btn group inline-flex w-full items-center bg-slate-100 text-black shadow-sm hover:bg-slate-900"
            href="/apply"
          >
            Join the waitlist
            <span className="ml-2 tracking-normal text-black transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
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
        </div>
      </div>

      {/* Illustration */}
      <div
        className="pointer-events-none absolute -right-80 bottom-0 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          className=""
          src={Illustration as string}
          // width={Illustration.width}
          // height={Illustration.height}
          alt="Footer illustration"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid gap-8 border-t border-slate-700 py-8 sm:grid-cols-12 lg:grid-cols-10">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <g fillRule="nonzero" fill="none">
                  <g className="fill-blue-500" transform="translate(3 3)">
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

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-3 text-sm font-bold text-slate-100">Company</h6>
            <ul className="space-y-2 text-sm font-[450]">
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  Diversity / Inclusion
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  Code of conduct
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  Financial statements
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-3 text-sm font-bold text-slate-100">Company</h6>
            <ul className="space-y-2 text-sm font-[450]">
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  Send us an email
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="pb-4 md:pb-8">
          <div className="text-xs text-slate-500">
            If you would like to find out more about which entity you receive
            services from please click{" "}
            <a
              className="font-medium underline transition duration-150 ease-in-out hover:text-blue-500"
              href="#0"
            >
              here
            </a>{" "}
            If you have any other questions, please reach out to us via the
            in-app chat. Custom Bank is a bank established in the Republic of
            Ireland. Custom Bank is licensed by the European Central Bank and
            regulated by the Bank of Ireland. Cusom Bank provides credit,
            payment, current account and demand deposit account services.
          </div>
        </div>
      </div>
    </footer>
  );
}

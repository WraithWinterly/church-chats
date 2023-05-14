import Link from "next/link";
import Image from "next/image";
import Illustration from "~/assets/fintech/hero-illustration.svg";
import HeroImage from "~/assets/fintech/hero-image.png";

export default function Hero() {
  return (
    <section className="relative">
      {/* Bg */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 mb-28 rounded-bl-[100px] bg-gradient-to-tr from-primary-1 to-secondary md:mb-0"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-36 md:pb-20 md:pt-40">
          {/* Hero content */}
          <div className="relative mx-auto max-w-xl text-center md:max-w-none md:text-left">
            {/* Content */}
            <div className="md:w-[600px]">
              {/* Copy */}
              <h1
                className="h1 mb-6 text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Empower Your Parishioners with
                <br /> 24 / 7 Support
              </h1>
              <p
                className="mb-8 text-lg text-gray-200"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our AI chatbot is entirely focused on enhancing member
                <br /> care in Catholic Churches.
              </p>

              {/* Buttons */}
              <div
                className="mx-auto mb-12 max-w-xs space-y-4 sm:flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0 md:mb-0 md:justify-start"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="btn group inline-flex w-full items-center bg-slate-800 py-4 text-slate-100 shadow-sm hover:bg-slate-900"
                    href="/apply"
                  >
                    Join the waitlist
                    <span className="ml-2 tracking-normal text-white transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
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
            </div>

            {/* Image */}
            <div className="mx-auto -mb-12 max-w-sm md:absolute md:left-[600px] md:top-0 md:-mt-12 md:mb-0 md:max-w-none">
              <div className="relative -ml-3 -mr-24 md:mx-0">
                <Image
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 mt-16 max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-lighten md:mt-0"
                  src={Illustration as string}
                  priority
                  alt="Hero illustration"
                  aria-hidden="true"
                />
                <Image
                  src={HeroImage}
                  className="md:max-w-none"
                  width="548"
                  height="545"
                  alt="Credit card"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

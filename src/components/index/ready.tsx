import Link from "next/link";

export default function Ready() {
  return (
    <section>
      <div className="mx-auto my-32 max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            // className="rounded-3xl bg-gradient-to-t from-white to-gray-100 px-8 py-10 text-black md:rounded-full md:px-12 md:py-16 md:pb-28 lg:pb-0"
            className="rounded-[70px] rounded-br-none bg-primary-2 px-4 py-8 text-black md:rounded-full md:rounded-br-none md:px-12 md:py-16 md:pb-28 lg:pb-16"
            data-aos="zoom-y-out"
          >
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="mb-6 text-center lg:mb-0 lg:mr-16 lg:text-left">
                <h3 className="h3 mb-2 ">Ready to try Church Chats?</h3>
                <p className="text-lg  opacity-75">
                  We have a free tier available to get you started right away.
                </p>
              </div>

              {/* CTA button */}
              <Link
                className="btn group inline-flex items-center bg-slate-800 py-4 text-slate-100 shadow-sm hover:bg-slate-900"
                href="/apply"
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

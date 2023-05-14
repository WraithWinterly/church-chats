export default function Ready() {
  return (
    <section>
      <div className="mx-auto mt-32 max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="rounded bg-secondary px-8 py-10 shadow-2xl md:px-12 md:py-16"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="mb-6 text-center lg:mb-0 lg:mr-16 lg:text-left">
                <h3 className="h3 mb-2 text-white">Ready to get started?</h3>
                <p className="text-lg text-white opacity-75">
                  We have a generous free tier available to get you started
                  right away.
                </p>
              </div>

              {/* CTA button */}
              <div>
                <a
                  className="btn bg-gradient-to-r from-blue-100 to-white text-blue-600"
                  href="#0"
                >
                  Get started for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

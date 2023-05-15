export default function InstallInMinutes() {
  return (
    <section>
      <div className="relative">
        {/* Bg */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-tr-[100px] bg-gradient-to-tr from-primary-3 to-[#102216]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative mx-auto max-w-xl text-center md:max-w-none md:text-left">
              {/* Section header */}
              <div className="mb-12 md:mb-20 md:max-w-3xl" data-aos="fade-up">
                <h2 className="h2 mb-4 text-white">
                  Install Church Chats to your website in{" "}
                  <span className="text-primary-2">minutes</span>
                </h2>
                <p className="mb-8 text-lg text-gray-200">
                  We understand how difficult it is to install new features on
                  to your website. Don't worry, we designed the installation
                  process to be as simple as possible.
                </p>
              </div>

              {/* Image */}
              {/* <div
                className="mb-6 flex justify-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative">
                  <Image
                    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-lighten"
                    src={LogosIllustration}
                    alt="Logos illustration"
                    aria-hidden="true"
                  />
                  <Image src={Logos} width={720} height={283} alt="Logos" />
                </div>
              </div> */}
              <div data-aos="flip-up">
                <h2 className="mb-8 text-center text-5xl font-bold text-white">
                  89%
                </h2>
                <div className="mx-auto mb-12 h-6 w-full max-w-4xl rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-6 rounded-full bg-white"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </div>

              {/* Items */}
              <div
                className="mx-auto grid max-w-sm items-start gap-12 text-left md:-mx-9 md:max-w-none md:grid-cols-3 md:gap-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* 1st item */}
                <div className="relative after:absolute after:right-0 after:top-1/2 after:hidden after:h-16 after:w-px after:-translate-y-1/2 after:bg-blue-400 last:after:hidden md:px-9 md:after:block">
                  <div className="mb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-2 font-bold text-black">
                      1
                    </div>
                  </div>
                  <h4 className="mb-1 text-xl font-bold text-white">
                    Find the code snippet
                  </h4>
                  <p className="text-gray-200">
                    View the code snippet for the chatbot installation.
                  </p>
                </div>

                {/* 2nd item */}
                <div className="relative after:absolute after:right-0 after:top-1/2 after:hidden after:h-16 after:w-px after:-translate-y-1/2 after:bg-blue-400 last:after:hidden md:px-9 md:after:block">
                  <div className="mb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-2 font-bold text-black">
                      2
                    </div>
                  </div>
                  <h4 className="mb-1 text-xl font-bold text-white">
                    Copy & paste
                  </h4>
                  <p className="text-gray-200">
                    Copy the code snippet and paste it before the closing
                    &lt;/body&gt; tag on every page you want the widget to
                    appear.
                  </p>
                </div>

                {/* 3rd item */}
                <div className="relative after:absolute after:right-0 after:top-1/2 after:hidden after:h-16 after:w-px after:-translate-y-1/2 after:bg-primary-2 last:after:hidden md:px-9 md:after:block">
                  <div className="mb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-2 font-bold text-black">
                      3
                    </div>
                  </div>
                  <h4 className="mb-1 text-xl font-bold text-white">
                    Deploy your website
                  </h4>
                  <p className="text-gray-200">And you're all set to go!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

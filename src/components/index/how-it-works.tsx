import VideoThumb from "~/assets/simple/hero-image-01.png";
import ModalVideo from "~/components/template-simple/modal-video";

export default function HowItWorks() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="-z-1 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="text-center md:pb-16">
            <h1
              className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl"
              data-aos="zoom-y-out"
            >
              How
              <span className="bg-gradient-to-r from-primary-1 to-secondary bg-clip-text text-transparent">
                {" "}
                Church Chat{" "}
              </span>
              Works
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="my-8 text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Our powerful AI chatbot service is designed to support multiple
                languages, allows parishioners to efficiently find relevant
                information, and deliver guidance tailored to their needs.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import pfp1 from "~/assets/pfp1.jpeg";
import pfp2 from "~/assets/pfp2.jpeg";
import pfp3 from "~/assets/pfp3.jpeg";
import pfp4 from "~/assets/pfp4.jpeg";

import conference from "~/assets/conference.png";

export default function AboutUs() {
  return (
    <main>
      <Hero />
      <OurStory />
      <Humans />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative">
      {/* Bg */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 mb-28 h-[480px] rounded-bl-[100px] bg-gradient-to-tr from-primary-1 to-secondary md:mb-0 md:h-auto"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="pt-36 md:pb-20 md:pt-40">
          {/* Hero content */}
          <div className="relative mx-auto max-w-xl text-center md:max-w-none md:text-left">
            {/* Content */}
            <div className="">
              {/* Copy */}
              <h1
                className="h1 mb-6 text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                We enable churches to communicate seamlessly with their
                community
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="relative mx-auto flex max-w-5xl flex-col gap-8 px-8 py-32 text-slate-700">
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        <h2 className="pb-8 text-5xl font-semibold" data-aos="fade-left">
          Our Story
        </h2>
        <span data-aos="fade-up">
          At Church Chats, our journey began at HackGPT 2023. Armando, the
          Director of Youth & Young Adults for the Diocese of Orange, had an
          idea to revolutionize the way churches communicate and engage with
          their community. By understanding the challenges the churches around
          us were facing, Rocky, Ayden, and Christina set out to create a
          solution that would ultimately empower churches to connect with their
          congregation.
        </span>
      </div>

      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Image
          src={conference.src}
          alt="Church Conference"
          width={500}
          height={500}
          data-aos="fade-right"
        />
        <span className="mx-auto max-w-4xl" data-aos="fade-left">
          We're a team of passionate individuals, and we began building an AI
          chatbot service specifically designed for Catholic Churches. Our goal
          was to provide churches with a tool that not only answered questions
          but also was deeply knowledgeable of Catholicism, offered valuable
          resources to parishioners, and provide personalized multilingual
          support to the community.
        </span>
      </div>
      <span className="mx-auto max-w-4xl" data-aos="fade-up">
        Join us on this exciting journey as we strive to empower churches. Let's
        create a space online where the values and teachings of the Church can
        thrive, and where every member feels valued, connected, and cared for.
      </span>
    </section>
  );
}

function Humans() {
  return (
    <div className="my-32 flex flex-col items-center px-4 md:px-8">
      <h2
        className="pb-8 text-center text-4xl font-semibold md:text-6xl"
        data-aos="fade-right"
      >
        The humans behind our product
      </h2>
      <div className="grid grid-cols-1 py-12 md:grid-cols-2 md:gap-12 xl:gap-28">
        <HumanCard
          name="Armando Cervantes"
          title="CEO & Co-founder & Sponsor"
          image={pfp1.src}
          description="A successful nonprofit director and events management professional with extensive experience in planning, implementing and leading local, diocesan, regional and national comprehensive youth and young adult programs for nonprofit organizations."
          twitter="https://twitter.com/amcervant"
          github=""
          linkedin="https://www.linkedin.com/in/armando-cervantes-9b88199/"
        />
        <HumanCard
          name="Rocky Nguyen"
          title="CTO & Co-founder"
          image={pfp2.src}
          description="I've always felt blessed with the many gifts in my life, and so I'm focused on putting my skills to good use. This can mean volunteering with a non-profit project on the weekends or helping out in the local community."
          twitter="https://twitter.com/rockyntheblock"
          github="https://github.com/rockynhatnguyen"
          linkedin="https://www.linkedin.com/in/rockynhatnguyen/"
        />
        <HumanCard
          name="Ayden Springer"
          title="Lead Web Developer"
          image={pfp3.src}
          description="I'm a very hard working Full Stack Developer, and I enjoy using the power of technology to solve the world's problems."
          twitter="https://twitter.com/WraithWinterly"
          github="https://github.com/WraithWinterly"
          linkedin="https://www.linkedin.com/in/ayden-springer/"
        />
        <HumanCard
          name="Christina Vu"
          title="Lead UI/UX Designer"
          image={pfp4.src}
          description="I'm passionate about creating intuitive, user-friendly, and accessible interfaces. I love using my skills to make a positive impact on people's lives, and I am constantly seeking new challenges to improve as a designer!"
          twitter="https://twitter.com/designwithtinaa?s=09"
          github="https://github.com/vucd1"
          linkedin="https://www.linkedin.com/in/christina-d-vu/"
        />
      </div>
    </div>
  );
}

function HumanCard({
  name,
  title,
  image,
  description,
  twitter,
  github,
  linkedin,
}: {
  name: string;
  title: string;
  image: string;
  description: string;
  twitter: string;
  github: string;
  linkedin: string;
}) {
  return (
    <div className="flex max-w-md flex-col text-center" data-aos="fade-up">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="mx-auto w-36 rounded-full"
      />
      <h4 className="text-3xl font-semibold">{name}</h4>
      <span className="pt-2 text-blue-500" data-aos="flip-up">
        {title}
      </span>
      <span className="py-4 text-slate-700">{description}</span>
      <div className="flex justify-center gap-3">
        <Link
          href={twitter}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        <span>•</span>
        {github.length > 0 && (
          <>
            <Link
              href={github}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            <span>•</span>
          </>
        )}

        <Link
          href={linkedin}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
}

import { type NextPage } from "next";
import Head from "next/head";
import Hero from "~/components/index/hero";
import HowItWorks from "~/components/index/how-it-works";
import InstallInMinutes from "~/components/index/install-in-minutes";
import Ready from "~/components/index/ready";
import Section8 from "~/components/index/section8";

import index1 from "~/assets/index1.png";
import index2 from "~/assets/index2.png";
import index3 from "~/assets/index3.png";
import index4 from "~/assets/index4.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Church Chats</title>
        <meta
          name="description"
          content="Powerful AI chatbot service supports multiple languages, allowing members to efficiently find and access relevant information, and receive guidance tailored to their needs."
        />
      </Head>

      <link rel="icon" href="/favicon.ico" />
      <main>
        <Hero />
        <HowItWorks />
        <Section8
          texts={[
            [
              "Multilingual Support",
              "Church Chats can effectively cater to the linguistic needs of the community. Parishioners can choose their preferred language at the start of the conversation and be able to change at any point in time.",
            ],
            [
              "Designed with Accessibility",
              "Being inclusive is incredibly important to us. Following the WCAG standard, we ensured all visual aspects meet guidelines.",
            ],
            [
              "Connection to a Human  Representative",
              "We believe that technology should assist, and not replace, human connection. Parishioners are able to easily connect with a live customer care representative when needed.",
            ],
            [
              "Cost Efficient",
              "Say goodbye to costly phone call services. Church Chats is a cost-effective alternative, saving your church valuable resources without compromising on quality care and support.",
            ],
          ]}
          imgs={[index1.src, index2.src, index3.src, index4.src]}
        />
        <InstallInMinutes />
        <Ready />
      </main>
    </>
  );
};

export default Home;

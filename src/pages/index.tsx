import { type NextPage } from "next";
import Head from "next/head";
import Hero from "~/components/index/hero";
import HowItWorks from "~/components/index/how-it-works";
import InstallInMinutes from "~/components/index/install-in-minutes";
import Ready from "~/components/index/ready";
import Section8 from "~/components/index/section8";

import index3 from "~/assets/index3.png";
import index4 from "~/assets/index4.png";
import church from "~/assets/church.png";
import multilangual from "~/assets/multilangual.png";

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
              "Built Specifically for Churches",
              <>
                Compared to other chatbots that give generic answers, Church
                Chats is built to answer questions around faith and is trained
                to be{" "}
                <span className="font-bold">
                  helpful, pastoral, and evangelizing.
                </span>
              </>,
            ],
            [
              "Multilingual Support",
              "Church Chats can effectively cater to the linguistic needs of the community. Parishioners can choose their preferred language at the start of the conversation and be able to change at any point in time.",
            ],
            [
              "Connection to a Human  Representative",
              <>
                We believe that technology should assist, and not replace{" "}
                <span className="font-bold">human connection.</span>{" "}
                Parishioners are able to easily connect with a live customer
                care representative if needed. We seek out representatives who
                share the same goals as the parishioner, helping them grow
                closer in connection to God.
              </>,
            ],
            [
              "Cost Efficient",
              "Say goodbye to costly phone call services. Church Chats is a cost-effective alternative, saving your church valuable resources without compromising on quality care and support.",
            ],
          ]}
          imgs={[church.src, multilangual.src, index3.src, index4.src]}
        />
        <InstallInMinutes />
        <Ready />
      </main>
    </>
  );
};

export default Home;

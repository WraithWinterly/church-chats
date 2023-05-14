import { type NextPage } from "next";
import Head from "next/head";
import Hero from "~/components/index/hero";
import HowItWorks from "~/components/index/how-it-works";
import InstallInMinutes from "~/components/index/install-in-minutes";
import Ready from "~/components/index/ready";

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
        <InstallInMinutes />
        <Ready />
      </main>
    </>
  );
};

export default Home;

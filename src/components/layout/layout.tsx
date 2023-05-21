import { useEffect } from "react";
import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

import AOS from "aos";
import "aos/dist/aos.css";
import ModalWaitlist from "../modal-waitlist";
import { useAppContext } from "../context/app-context";

import loadChatbot from "../loadChatbot";

export default function Layout({ children }: { children: ReactNode }) {
  loadChatbot();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  const ctx = useAppContext();
  const setIsOpen = ctx.setSidebarOpen;
  const shown = ctx.sidebarOpen;
  return (
    <>
      <ModalWaitlist isOpen={shown} setIsOpen={setIsOpen} />
      <Header />
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden">
        <div className="flex h-full w-full flex-col pb-[1100px] md:pb-[600px]">
          {children}
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

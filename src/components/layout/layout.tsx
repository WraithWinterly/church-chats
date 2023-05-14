import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
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

import Image from "next/image";
import { useId } from "react";

interface Section8Props {
  imgs: [string, string, string, string];
  texts: [
    [JSX.Element | string, JSX.Element | string],
    [JSX.Element | string, JSX.Element | string],
    [JSX.Element | string, JSX.Element | string],
    [JSX.Element | string, JSX.Element | string]
  ];
}

export default function Section8({ imgs, texts }: Section8Props) {
  const id = useId();

  return (
    <div
      className={`mx-auto max-w-7xl rounded-tl-[120px] bg-gradient-to-b from-slate-100 to-white px-4 pb-24 pt-24 md:px-16`}
    >
      <div
        className="mx-auto flex w-full max-w-7xl flex-col gap-12 "
        data-aos="fade-up"
      >
        <div className="relative flex flex-col gap-8">
          {texts.map((text, i) => {
            return (
              <div
                className="mx-2 grid w-full gap-8 md:grid-cols-2"
                key={`${id}-${i}`}
              >
                <Image
                  src={imgs[i]!}
                  width={2400}
                  height={2400}
                  alt="feature-img"
                  className="mx-auto h-[300px] w-[300px] object-scale-down md:order-none md:h-[500px] md:w-[500px]"
                  data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                  style={{ filter: "brightness(0.9) saturate(1.2)" }}
                />
                <div
                  className={`mb-12 flex max-w-[500px] flex-col justify-center text-start ${
                    i % 2 === 0 ? "md:order-first" : "md:order-none"
                  }`}
                  data-aos="fade-up"
                >
                  <h2 className="text-bold pb-8 text-4xl font-semibold">
                    {texts[i]![0]}
                  </h2>
                  <span className="text-xl text-slate-700">{texts[i]![1]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

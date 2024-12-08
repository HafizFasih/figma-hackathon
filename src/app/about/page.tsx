import Brand from "@/components/Brand";
import Club from "@/components/Club";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <section className="h-48 w-full flex items-center justify-between px-24">
        <h1 className="text-2xl font-clash text-darkPrimary">
          A brand built on the love of craftmanship,<br></br> quality and
          outstanding customer service
        </h1>
        <button className="bg-lightGray h-12 w-36 capitalize text-sm">
          view collection
        </button>
      </section> */}
      <ImageSection />
      <Section
        direction={false}
        heading="Our service isn't just personal, it's actually hyper personally exquisite"
        image="/about.png"
      />
      <Brand />
      <Club />
    </div>
  );
};

export default page;
const ImageSection = () => {
  return (
    <div className="flex mmd:px-20 px-5 max-md:flex-col sm:gap-4 gap-5 py-10">
      <TextSection />
      <section className="relative md:h-[450px] h-[300px] md:w-1/2 w-full">
        <Image src="/sofa2.png" alt="" fill={true} className="object-cover" />
      </section>
    </div>
  );
};

const TextSection = () => {
  return (
    <section className="md:h-[450px] max-md:gap-10 md:w-1/2 w-full bg-darkPrimary text-white sm:py-12 py-8 flex flex-col justify-between sm:px-10 px-5">
      <div className="flex flex-col gap-8">
        <h1 className="xs:text-2xl text-xl font-clash">
          It started with a small idea
        </h1>
        <p className="max-sm:text-sm">
        A global brand with local beginnings, our story begain in a small studio in South London in early 2014
        </p>
      </div>
      <button className="bg-primary h-12 md:w-36 w-full capitalize text-sm">
        view collection
      </button>
    </section>
  );
};

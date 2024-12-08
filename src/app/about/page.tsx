import Brand from "@/components/Brand";
import Club from "@/components/Club";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="h-48 w-full flex items-center justify-between px-24">
        <h1 className="text-2xl font-clash text-darkPrimary">
          A brand built on the love of craftmanship,<br></br> quality and
          outstanding customer service
        </h1>
        <button className="bg-lightGray h-12 w-36 capitalize text-sm">
          view collection
        </button>
      </section>
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
    <div className="flex px-20 gap-4 py-10">
      <TextSection />
      <section className="relative h-[450px] w-1/2">
        <Image src="/sofa2.png" alt="" fill={true} className="object-cover" />
      </section>
    </div>
  );
};

const TextSection = () => {
  return (
    <section className="h-[450px] w-1/2 bg-darkPrimary text-white py-12 flex flex-col justify-between px-10">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-clash">
          It started with a small idea
        </h1>
        <p className="">
        A global brand with local beginnings, our story begain in a small studio in South London in early 2014
        </p>
      </div>
      <button className="bg-primary h-12 w-36 capitalize text-sm">
        view collection
      </button>
    </section>
  );
};

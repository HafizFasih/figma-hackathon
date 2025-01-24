/* eslint-disable */
import Image from "next/image";

const ImageSection = ({ image }: { image: any }) => {
  return (
    <section className="relative min-h-[450px] md:w-1/2 w-full">
      <Image src={image} alt="" fill={true} className="object-cover" />
    </section>
  );
};

export default ImageSection;

import Image from "next/image";
import AboutImg from "../assets/about.jpg";

export default function AboutMe({ data }) {
  return (
    <div className="bg-[#fafafa] mt-8 px-4 py-8 md:px-8 lg:px-16">
      <div className="grid md:grid-cols-2 gap-6 ">
        <div className="w-full h-80 hidden md:block">
          <Image
            src={AboutImg}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="h-80 flex flex-col">
          <p className="text-2xl font-bold m-0">About me</p>
          <div className="w-full md:hidden mt-8">
            <Image
              src={AboutImg}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <p className="text-md text-neutral md:mt-8 mt-4">{data}</p>
        </div>
      </div>
    </div>
  );
}

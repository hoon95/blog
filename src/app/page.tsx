import Image from "next/image";
import CopyIcon from "@/components/icons/Copy";
import Typed from "@/components/Type";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-10 h-[70vh] z-50">
      <Image src="/favicon.svg" alt="logo" width={200} height={200} />
      <div className="flex flex-col gap-3 max-lg:w-min">
        <div className="flex text-4xl font-bold">
          <Typed />
        </div>
        <p className="text-xl">
          Coding my way to becoming a Front-end Developer!
        </p>

        <div className="flex items-center gap-3 mt-3">
          <pre className="bg-[#0f1115] text-white p-3 rounded-lg flex items-center gap-3">
            <code>npm install hoon</code>
            <CopyIcon />
          </pre>
        </div>
      </div>
    </div>
  );
}

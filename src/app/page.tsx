import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="h-full justify-center flex flex-col gap-y-2 items-center text-6xl animate-pulse">
      <h1>This is a home page</h1>
      <Image
        src="/mario.png"
        alt="img"
        width={200}
        height={200}
      />
      <Script src="/utils/dummy.js"/>
    </div>
  );
}

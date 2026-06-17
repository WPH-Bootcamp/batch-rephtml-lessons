import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div>
        <h1>Home Page</h1>
        <Image src="./vercel.svg" alt="Logo Vercel" width={100} height={100} />
      </div>
    </div>
  );
}

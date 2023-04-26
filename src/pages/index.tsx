import icon from "@/images/icon-dice.svg";
import divideMobile from "@/images/pattern-divider-desktop.svg";
import divideDesktop from "@/images/pattern-divider-mobile.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => console.log(data));

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) =>{setAdvice(data.slip.advice);
        setId(data.slip.id)} )
       
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex h-screen bg-[hsl(218,23%,16%)] justify-center items-center font-Manrope ">
      <div className="relative flex flex-col gap-2 w-60 bg-[hsl(217,19%,38%)] rounded-md items-center text-center py-4 px-[10px] sm:w-80">
        <p className="text-xs text-[hsl(150,100%,66%)]">ADVICE #{id}</p>
        <p className="text-lg">{advice}</p>
        {/* <p className="text-lg">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p> */}
        <Image src={divideMobile} alt="" />
      </div>
      {/* <button className="mt-2 bg-[hsl(150,100%,66%)] w-80 absolute"><Image src= {icon} alt="" /></button> */}
    </main>
  );
}

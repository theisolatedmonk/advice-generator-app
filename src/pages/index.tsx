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
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      })

      .catch((error) => console.log(error));
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <main className="flex h-screen bg-[hsl(218,23%,16%)] justify-center items-center font-Manrope ">
      <div className="relative flex flex-col gap-4 w-60 bg-[hsl(217,19%,24%)] rounded-lg items-center text-center justify-center py-4 px-[12px] sm:w-96 md:w-96 lg:w-96">
        <p className="text-xs items-start text-[hsl(150,100%,66%)]">
          ADVICE #{id}
        </p>
        <p className=" flex items-center text-center">{advice}</p>
        <div className="flex mb-3 ">
          <Image
            className="flex sm:hidden md:hidden lg:hidden xl:hidden 
          "
            src={divideMobile}
            alt=""
          />
          <Image
            className="sm:flex md:flex lg:flex xl:flex  hidden 
          "
            src={divideDesktop}
            alt=""
          />
        </div>
        <section className="flex justify-center items-center group  ">
          <div className="absolute bottom-[-20px] group-hover:bg-[hsl(150,100%,66%)] p-1 rounded-full h-12 w-12  
          transition-all animate-tilt
          blur opacity-75
          "></div>
          <button
            onClick={refreshPage}
            className=" absolute bottom-[-20px]  flex items-center justify-center  h-12 w-12 rounded-full bg-[hsl(150,100%,66%)]      "
          >
            <Image className="h-4 w-4  " src={icon} alt="" />
          </button>
        </section>
      </div>
    </main>
  );
}

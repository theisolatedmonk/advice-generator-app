import icon from "@/images/icon-dice.svg"
import divideMobile from "@/images/pattern-divider-desktop.svg"
import divideDesktop from "@/images/pattern-divider-mobile.svg"



export default function Home() {
  return (
    <main className="flex h-screen bg-[hsl(218,23%,16%)] justify-center items-center font-Manrope ">
      <div className=" flex flex-col gap-2 w-60 bg-[hsl(217,19%,38%)] rounded-md items-center text-center py-4 px-[10px] sm:w-80">
        <p className="text-xs">ADVICE #117</p>
        <p className="text-lg">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
        {/* <Image src= {divideMobile} alt="" /> */}
      </div>
      {/* <Image src= {icon} alt="" /> */}

     
    </main>
  )
}

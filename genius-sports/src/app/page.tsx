import Nav from "@/components/Nav";
import { MovingCards } from "@/components/ui/ui-components/moving-cards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0B0D17] text-white font-roboto min-h-screen">
     
    
    
    <Nav/>
 


      <main className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          Welcome to the intelligent sports era.
        </h1>
        <p className="mt-4 text-lg">
          We capture the smartest sports data and transform it into even smarter
          tech and fan experiences. What will you build?
        </p>
        <button className="mt-8 bg-white text-black py-2 px-6 rounded-full">
          Explore Genius
        </button>
      </main>

      <section className="mt-20 flex justify-center">
        <div className="bg-black w-3/4 h-64 flex items-center justify-center">
          <p className="text-yellow-400 text-2xl">A new</p>
        </div>
      </section>

 <MovingCards/>
    </div>
  );
}

import Nav from "@/components/Nav";
import { MovingCards } from "@/components/ui/ui-components/moving-cards";


export default function Home() {
  return (
    <div className="bg-[#0d1226]  text-white font-roboto min-h-screen">
     
    
    
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
  <div className=" py-10 p-10 w-3/4 h-full flex items-center justify-center">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
    >
      <source src="https://cms.geniussports.com/wp-content/uploads/2024/07/Built-on-Genius-Film-Subs.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  </div>
</section>


 <MovingCards/>
    </div>
  );
}

import Nav from "@/components/Nav";
import { MovingCards } from "@/components/ui/ui-components/moving-cards";


export default function Home() {
  return (
    <div className="bg-[#0d1226]  text-white font-roboto min-h-screen">
     
    
    
    <Nav/>
 


    <div className=" py-10 flex flex-col items-center text-center mt-10">
  <h1 className="header-font mb-5 ">
    Welcome to the <br /> intelligent sports era.
  </h1>

  <div>
    <p className=" description-font opacity-80 " >
      We capture the smartest sports data and transform it into even smarter <br />
      tech and fan experiences. What will you build?
    </p>
  </div>

  <button className="mt-8 bg-white text-black py-4 px-10 rounded-full">
    Explore Genius
  </button>
</div>


 

      <section className=" flex justify-center">
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

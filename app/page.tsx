import Navbar from "@/components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

export default function Home() {

  return (

    <>
      
      <main className="flex min-h-screen flex-col bg-mycolor-400">
        <Navbar />
        
        <div className="container mt-24 md:mt-36 px-12 py-4">
          <Hero />
        </div>
      </main>

    </>

  );

}
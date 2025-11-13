import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hi from "@/components/Hi";
import Mobile from "@/components/Mobile";
import Questions from "@/components/Questions";
import Security from "@/components/Security";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Conversion /> */}
       <Works />
      <Mobile />
    
      <Security />
      <Choose />
      <Questions />
      <Contact />
      <Hi />


    </>
  );
}

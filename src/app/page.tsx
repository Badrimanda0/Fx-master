import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hi from "@/components/Hi";
import Mobile from "@/components/Mobile";
import Questions from "@/components/Questions";
import Security from "@/components/Security";
import Works from "@/components/Works";
import Conversion from "../components/Conversion";
import Form from "../components/Form";
import New from "../components/New";
import Pay from "../components/Pay";
import Ready from "../components/Ready";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Conversion />
      <Pay />
      <Form />
       <Works />
       <Ready />
      <Mobile />
      <New />

      <Security />
      <Choose />
      <Questions />
      <Contact />
      <Hi />


    </>
  );
}

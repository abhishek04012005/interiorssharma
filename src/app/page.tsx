"use client";
import About from "@/components/aboutus/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import OurClients from "@/components/ourclients/ourclients";
// import Services from "@/components/service/Service";
import Testimonial from "@/components/testimonial/Testimonial";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <div>
         <Hero />
         <About/>
         {/* <Services /> */}
         <Work/>
         <OurClients/>
         <Testimonial />
         <Contact/>
    </div>
  );
}

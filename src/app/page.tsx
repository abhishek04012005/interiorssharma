"use client";
import About from "@/components/aboutus/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import OurClients from "@/components/ourclients/ourclients";
import OurTeam from "@/components/ourteam/OurTeam";
import Project from "@/components/project/Project";
import Testimonial from "@/components/testimonial/Testimonial";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <div>
         <Hero />
         <About/>
         <Work/>
         <Project/>
         <OurTeam/>
         <OurClients/>
         <Testimonial />
         <Contact/>
    </div>
  );
}

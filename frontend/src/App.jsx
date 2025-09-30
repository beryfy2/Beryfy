import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OurWorks from "./components/OurWorks";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NoWorks from "./components/NoWorks";


const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Stats />
        <Services />
        <OurTeam />
        <WhyChooseUs />
        {/* <Works /> */}
        <NoWorks />
        {/* <OurWorks /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />


    </>
  );
}

export default App;
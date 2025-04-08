import Image from "next/image";

import Hero from "../components/Hero"
import About from "../components/About"
import  Outletspage from "../components/Outletspage"
import Menupage from "../components/Menupage"
import Gallerypage from "../components/Gallerypage"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer";



export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Outletspage/>
      <Menupage/>
      <Gallerypage/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}

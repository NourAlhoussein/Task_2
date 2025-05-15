import { useState } from "react";
import "./index.css";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/navbar/navbar";
import HeroHome from "./components/HeroHome/HeroHome";
import TitleSection from "./components/TitleSection/TitleSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import QuestionsSection from "./components/QuestionsSection/QuestionsSection";
import NavigatePagesSection from "./components/NavigatePagesSection/NavigatePagesSection";
import TestmonialsSection from "./components/TestmonialsSection/TestmonialsSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="appStyle">
      <Banner />
      <NavBar />
      <div className="HeroSection">
        <HeroHome />
      </div>
      <div className="mainSection">
        <TitleSection
          btnName="Children Deserve Bright Future"
          titleSection="Our Benefits"
          description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
        />
        <BenefitsSection />
        <TitleSection
          btnName="Their Happy Words 🤗"
          titleSection="Our Testimonials"
          description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
        />
        <TestmonialsSection />
        <TitleSection
          btnName="Solutions For The Doubts"
          titleSection="Frequently Asked Questions"
          description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        />
        <QuestionsSection />
        <TitleSection
          btnName="Explore More"
          titleSection="Navigate through our Pages"
          description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
        />
        <NavigatePagesSection />
      </div>
      <div className="FooterSection">
        <Footer
          logoName="Little Learner"
          email="hello@littlelearners.com"
          number="+91 91813 23 2309"
          address="Somewhere in the World"
        />
      </div>
    </div>
  );
}

export default App;

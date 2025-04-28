import { useState } from "react";
import "./index.css";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/navbar/navbar";
import HomePage from "./components/HomePage/HomePage";
import TitleSection from "./components/TitleSection/TitleSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import QuestionsSection from "./components/QuestionsSection/QuestionsSection";
import PagesSection from "./components/PagesSection/PagesSection";
import TestmonialsSection from "./components/TestmonialsSection/TestmonialsSection";
import Footer from "./components/Footer/Footer";
import { GiGraduateCap } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import { FaMaskFace } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import photo1 from "../public/assets/images/Icon.png";
import photo2 from "../public/assets/images/Vector.png";
import photo3 from "../public/assets/images/Mask group.png";
import imageContainer from "../public/assets/images/Image Container.png";
import logo from "/assets/images/logo.png";
import container from "/assets/images/Container.png";
import abstract from "/assets/images/Abstract Design.png";
import abstract2 from "/assets/images/Abstract Design2.png";
import group from "/assets/images/Group.png";
import group2 from "/assets/images/Group (1).png";

function App() {
  return (
    <div className="appStyle">
      <Banner
        abstract={abstract}
        abstract2={abstract2}
        group={group}
        group2={group2}
      />
      <NavBar
        logo={logo}
        logoName="Little Learner"
        items={[
          { link: "#Home", content: "Home" },
          { link: "#AboutUs", content: "About Us" },
          { link: "#Academics", content: "Academics" },
          { link: "#Admissions", content: "Admissions" },
          { link: "#StudentLife", content: "Student Life" },
        ]}
      />
      <HomePage
        homePhoto={imageContainer}
        items={[
          { number: 7000, type: "Students Passed Out" },
          { number: 37, type: "Awards & Recognitions" },
          { number: 15, type: "Experience Educators" },
        ]}
      />
      <TitleSection
        btnName="Children Deserve Bright Future"
        titleSection="Our Benefits"
        description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <BenefitsSection
        benefits={[
          {
            icon: <GiGraduateCap />,
            title: "Holistic Learning Approach",
            description:
              "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
          },
          {
            icon: <FaCrown />,
            title: "Experienced Educators",
            description:
              "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
          },
          {
            icon: <FaMaskFace />,
            title: "Nurturing Environment",
            description:
              "We prioritize safety and provide a warm and caring atmosphere for every child.  ",
          },
          {
            icon: <FaFlag />,
            title: "Play-Based Learning",
            description:
              "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
          },
          {
            icon: <MdOutlineSportsBasketball />,
            title: "Individualized Attention",
            description:
              "Our small class sizes enable personalized attention, catering to each child's unique needs.",
          },
          {
            icon: <BsFillPeopleFill />,
            title: "Parent Involvement",
            description:
              "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
          },
        ]}
      />
      <TitleSection
        btnName="Their Happy Words 🤗"
        titleSection="Our Testimonials"
        description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <TestmonialsSection
        testmonials={[
          {
            photoSrc: photo1,
            name: "Jennifer B1",
            description:
              "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
          },
          {
            photoSrc: photo2,
            name: "David K2",
            description:
              "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
          },
          {
            photoSrc: photo3,
            name: "Emily L3",
            description:
              "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
          },
          {
            photoSrc: photo1,
            name: "Jennifer B4",
            description:
              "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
          },
          {
            photoSrc: photo2,
            name: "David K5",
            description:
              "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
          },
          {
            photoSrc: photo3,
            name: "Emily L6",
            description:
              "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
          },
        ]}
      />
      <TitleSection
        btnName="Solutions For The Doubts"
        titleSection="Frequently Asked Questions"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <QuestionsSection
        questions={[
          {
            title: "What are the school hours at Little Learners Academy?",
            answer:
              "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
          },
          {
            title: "Is there a uniform policy for students?",
            answer:
              "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
          },
          {
            title:
              "What extracurricular activities are available for students?",
            answer:
              "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
          },
          {
            title:
              "What extracurricular activities are available for students?",
            answer:
              "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
          },
          {
            title: "How do you handle food allergies and dietary restrictions?",
            answer:
              "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
          },
          {
            title:
              "What is the teacher-to-student ratio at Little Learners Academy?",
            answer:
              "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
          },
          {
            title: "How do you handle discipline and behavior management?",
            answer:
              "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
          },
          {
            title: "How do I apply for admission to Little Learners Academy?",
            answer:
              "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
          },
        ]}
      />
      <TitleSection
        btnName="Explore More"
        titleSection="Navigate through our Pages"
        description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <PagesSection
        container={container}
        pages={[
          {
            title: "About Us",
            content:
              "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education. ",
          },
          {
            title: "Academics",
            content:
              "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
          },
          {
            title: "Student Life",
            content:
              "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
          },
          {
            title: "Admissions",
            content:
              "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces. ",
          },
        ]}
      />
      <Footer
        logo={logo}
        logoName="Little Learner"
        email="hello@littlelearners.com"
        number="+91 91813 23 2309"
        address="Somewhere in the World"
      />
    </div>
  );
}

export default App;

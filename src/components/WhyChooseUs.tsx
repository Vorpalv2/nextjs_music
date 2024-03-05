"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
  const content = [
    {
      title: "Crescendo Conservatory",
      description:
        "Step into Crescendo Conservatory, where passion meets expertise in the heart of our vibrant music community. Offering a rich tapestry of musical education across genres like jazz, classical, rock, and electronic, our conservatory is dedicated to cultivating the next generation of musical talent. With a faculty comprising accomplished musicians and educators, we provide a nurturing environment for students to develop their skills, creativity, and understanding of music theory and history. Our programs range from beginner to advanced levels, ensuring a place for every learner. Experience masterclasses, ensemble performances, and a dynamic curriculum designed to elevate your musical prowess to its peak.",
    },
    {
      title: "Melodic Mastery Music Academy",
      description:
        "Melodic Mastery Music Academy is where musical dreams are transformed into reality. Our academy prides itself on a holistic approach to music education, blending classical training with contemporary methods to cater to the aspiring musician in everyone. From voice training and instrumental prowess to songwriting and production, our courses are tailored to empower students in achieving their individual goals. The academy boasts cutting-edge facilities, including recording studios and an auditorium for live performances, providing an all-encompassing platform for students to immerse themselves in the art of music. Engage with our community of passionate instructors and students, and embark on a journey of musical discovery and excellence.",
    },
    {
      title: "Rhythmic Rhapsody School of Music",
      description:
        "Welcome to Rhythmic Rhapsody School of Music, a sanctuary for those who seek to express themselves through the universal language of music. Our school is committed to delivering an exceptional educational experience, focusing on individual growth, performance excellence, and innovative learning. We offer a broad spectrum of lessons covering instruments such as piano, violin, guitar, and modern digital music production. Our bespoke program is designed to match each student's pace and interest, encouraging exploration and mastery in their chosen field. With annual recitals, community concerts, and competitive events, Rhythmic Rhapsody provides a platform for students to shine and connect with audiences. Dive into the rhythm of your soul and explore your musical potential with us.",
    },
  ];

  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;

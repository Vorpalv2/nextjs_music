"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "As a parent, finding the right music school for my child was crucial. [Your Music School Name] not only provided excellent instruction but also fostered a supportive environment where my child could thrive. I'm impressed by their dedication to nurturing young talent.",
    name: "Jason Davis",
    title: "Musician & Parent",
  },
  {
    quote:
      "I enrolled in classes at [Your Music School Name] to pursue my passion for music, and I couldn't be happier with my decision. The instructors are incredibly knowledgeable and supportive, creating a conducive learning atmosphere. I've grown so much as a musician thanks to their guidance.",
    name: "Rachel Patel",
    title: "Music Enthusiast",
  },
  {
    quote:
      "I've had the privilege of collaborating with [Your Music School Name] for workshops and performances, and I'm always impressed by their commitment to excellence. The faculty's expertise and the school's resources make it a standout institution in the music education landscape.",
    name: "Alex Turner",
    title: "Professional Musician",
  },
  {
    quote:
      "As both a parent and a student at [Your Music School Name], I can attest to the quality of education they provide. My child loves their lessons, and I've also found my own experience enriching and rewarding. It's a testament to the school's ability to cater to students of all ages and skill levels.",
    name: "Emma Garcia",
    title: "Proud Parent & Student",
  },
  {
    quote:
      "Enrolling at [Your Music School Name] was a pivotal step in my musical journey. The instructors go above and beyond to help students develop their skills and confidence. I've made significant progress since joining the school, and I'm excited to see where my musical pursuits take me next.",
    name: "Marcus Nguyen",
    title: "Aspiring Musician",
  },
];

const Testimonial = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-center text-3xl mt-6 font-bold mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            direction={"right"}
            speed={"slow"}
            items={testimonials}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

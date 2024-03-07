import React from "react";
import ContactUs from "@/components/ContactUs";
import { Button } from "@/components/ui/moving-border";
import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <div>
      <div>
        <form
          className="h-[35rem] flex justify-center items-center flex-grow flex-col"
          action="/contact"
          method="post"
        >
          <h1 className="py-2 pb-6 mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
            {" "}
            Get in touch with us
          </h1>
          <input
            className="dark:text-white text-black p-2 rounded-lg bg-gray-700 mb-2"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            id=""
          />
          <input
            className="dark:text-white text-black p-2 rounded-lg bg-gray-700 mb-2"
            placeholder="Message"
            type="text"
            name="message"
            id=""
          />
          <Button className="" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;

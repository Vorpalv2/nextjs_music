import React from "react";
import ContactUs from "@/components/ContactUs";
import { Button } from "@/components/ui/moving-border";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex h-[40%] justify-center items-center">
        <form action="/contact" method="post">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <Button type="submit">Submit</Button>
        </form>
        <ContactUs />
      </div>
    </div>
  );
};

export default page;

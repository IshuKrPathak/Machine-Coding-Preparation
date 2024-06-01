import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
        title="Do you prefer Android or Web"
        answer="I like to use Web products"
      />
      <Accordion
        title="Do you prefer Vanilla CSS or Tailwind CSS?"
        answer="I like to use Tailwind CSS"
      />
      <Accordion title="Do you prefer MongoDB or PostgreSQL?" answer="I like to use MongoDB " />
    </div>
  );
};

export default FAQ;

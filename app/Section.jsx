import React from "react";
import SectionHeader from "./SectionHeader";

const Section = ({ label, children }) => {
  return (
    <section className="w-11/12 mx-auto mb-10 py-7">
      {label && <SectionHeader label={label} />}
      <div className="mt-5 flex justify-evenly flex-wrap">{children}</div>
    </section>
  );
};

export default Section;

import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />
      </div>
    </section>
  );
};

export default Programs;

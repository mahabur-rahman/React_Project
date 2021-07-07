import React from "react";
import Common from "./Common";
import img3 from "./img/img3.jpg";
const About = () => {
  return (
    <>
      <Common
        title="Welcome to About Page 👍 "
        para="Find Out your clients by amazing website and grow business with react Js"
        imgSrc={img3}
        btnText="Contact Now"
        visit="/contact"
      />
    </>
  );
};

export default About;

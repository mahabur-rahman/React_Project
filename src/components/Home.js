import React from "react";
import Common from "./Common";
import img2 from "./img/img2.jpg";
const Home = () => {
  return (
    <>
      <Common
        title="Grow your business with "
        titleTwo=" React Js 😄"
        para="We are the team of react developer who's are making amazing website"
        imgSrc={img2}
        btnText="Get Started"
        visit="/service"
      />
    </>
  );
};

export default Home;

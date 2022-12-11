import React from "react";
import photo from "../asset/linkedinPhoto3.jpg";

const About = () => {
  return (
    <div className="py-10 ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img alt="" src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl my-5 font-bold">Learn More Aboout Me</h1>
            <h1 className="text-5xl font-bold">Frontend Developer</h1>
            <p className="py-6 text-justify">
              I am a passionate Front-end Developer, having graduated from BRAC
              University. I am seeking a position in a competitive environment
              that would challenge me to push my boundaries and expand my
              knowledge and offers a constructive atmosphere to enhance my
              qualities so that I can grow myself such that it always becomes
              helpful for the company. I have skilled and worked with React.js,
              JavaScript, Bootstrap, Tailwind, Express.js, HTML, CSS,
              React-Bootstrap, Daisy Ui, Node.js, Firebase, React Router, and
              MongoDB. I consider myself to be a fast learner, self-motivated,
              responsible, disciplined, and deadline-oriented, capable of
              working under pressure using analytical knowledge and the latest
              technology to solve problems in crises. Communicate with me for,
              #TeamWork #FrontendDevelopment #WebDevelopment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

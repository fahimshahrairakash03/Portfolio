import React from "react";
import photo from "../asset/linkedinPhoto1.jpg";
import truck from "../asset/truck2.jpg";
import img1 from "../asset/img1.jpg";
import quiz from "../asset/quiz.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            className="h-[115px]"
            src={photo}
            alt=""
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">I'm Fahim Shahriar Akash</h1>
            <h1 className="text-3xl font-bold text-cyan-700">
              Frontend Developer
            </h1>

            <p className="text-md mt-5 py-6">
              I am a passionate front-end developer having experience in
              building web applications with React.js, Javascript, Node.js, etc,
              who enjoys building websites that are both functional and
              aesthetically pleasing.
            </p>
            <div>
              <button className="btn btn-primary">
                <a
                  target="blank"
                  href="https://drive.google.com/file/d/1ZIqosUiQWIuoZmFa2X6oksOsT-R2uCSB/view?usp=sharing"
                >
                  Download Resume
                </a>
              </button>
            </div>
            <div className="mt-5 ">
              <h2 className="text-md  font-bold">Find Few Projects</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="card card-compact w-40 bg-base-100 shadow-xl">
                  <figure>
                    <img className="h-[115px]" src={truck} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <a target="blank" href="https://peterbilt-8dc71.web.app/">
                      <h2 className="card-title">Peterbilt</h2>
                    </a>
                  </div>
                </div>
                <div className="card card-compact w-40 bg-base-100 shadow-xl">
                  <figure>
                    <img className="h-[115px]" src={img1} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <a
                      target="blank"
                      href="https://project-roots-1f819.web.app/"
                    >
                      <h2 className="card-title">Roots</h2>
                    </a>
                  </div>
                </div>
                <div className="card card-compact w-40 bg-base-100 shadow-xl">
                  <figure>
                    <img className="h-[115px]" src={quiz} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <a
                      target="blank"
                      href="https://quiz2quiz-fshakash.netlify.app/home"
                    >
                      <h2 className="card-title">QuizToQuiz</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

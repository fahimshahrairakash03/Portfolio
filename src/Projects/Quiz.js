import React from "react";
import home from "../asset/quiztoquiz/home.png";
import topic from "../asset/quiztoquiz/topics.png";
import quiz from "../asset/quiztoquiz/quizes.png";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div>
      <div className="quiz">
        <h1 className="text-5xl font-bold my-5 text-center">Peterbilt</h1>
        <div className="grid sm:px-5  lg:px-5 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <img src={home} alt="" />
          <img src={topic} alt="" />
          <img src={quiz} alt="" />
        </div>
        <div className="w-3/4 mx-auto my-5 	 ">
          <div className="collapse rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <h2 className="font-bold text-white text-center">Details</h2>
            </div>
            <div className=" collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p className="font-semibold px-10  my-2 text-white">
                *** Site name: Quiz2Quiz
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** Live Link: https://quiz2quiz-fshakash.netlify.app/.
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** ReactJs, React-Bootstrap, React-Router, React Toast user for
                the project.
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** User can attempt the quiz of selected topics.
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** If the selected answer is correct is shows the correct
                answer otherwise shows the wrong answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

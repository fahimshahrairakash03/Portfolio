import React from "react";
import truck from "../asset/truck2.jpg";
import root from "../asset/img1.jpg";
import quiz from "../asset/quiz.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="my-10 ">
      <h2 className="text-5xl font-bold text-center">Projects</h2>
      <div className="px-10 my-10 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={truck} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Peterbilt</h2>
            <div className="card-actions justify-end">
              <a target="blank" href="https://peterbilt-8dc71.web.app/">
                {" "}
                <button className="btn btn-accent text-white">Live Link</button>
              </a>{" "}
              <Link to="/peterbilt">
                <button className="btn btn-warning text-white">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={root} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Roots</h2>
            <div className="card-actions justify-end">
              <a target="blank" href="https://project-roots-1f819.web.app/">
                <button className="btn btn-accent text-white">Live Link</button>
              </a>{" "}
              <Link to="/root">
                <button className="btn btn-warning text-white">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={quiz} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Quiz</h2>
            <div className="card-actions justify-end">
              <a
                target="blank"
                href="https://quiz2quiz-fshakash.netlify.app/home"
              >
                <button className="btn btn-accent text-white">Live Link</button>
              </a>
              <Link to="/quiz">
                <button className="btn btn-warning text-white">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

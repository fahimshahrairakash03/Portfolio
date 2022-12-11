import React from "react";
import home from "../asset/roots/home.png";
import course from "../asset/roots/courses.png";
import review from "../asset/roots/review.png";

const Roots = () => {
  return (
    <div>
      <div className="roots">
        <h1 className="text-5xl font-bold my-5 text-center">Peterbilt</h1>
        <div className="grid sm:px-5  lg:px-5 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <img src={home} alt="" />
          <img src={course} alt="" />
          <img src={review} alt="" />
        </div>
        <div className="w-3/4 mx-auto my-5 	 ">
          <div className="collapse rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <h2 className="font-bold text-white text-center">Details</h2>
            </div>
            <div className=" collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p className="font-semibold px-10  my-2 text-white">
                *** Project Name: Roots-Agency
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** Live Link: https://project-roots-1f819.web.app/
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** React Router has used to make the route of the components
                and the private route to make the restrictions.
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** React-bootstrap and bootstrap has used to make the UI of the
                website.
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** Context Api has used to get the access from all of
                components.
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** Firebase Authentication system was used to ensure the
                authentication service of the website.
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** MongoDb has used to organise tha data.
              </p>
              <p className="font-semibold px-10  my-2 text-white">
                *** Has taken the help of vercel to deploy the server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roots;

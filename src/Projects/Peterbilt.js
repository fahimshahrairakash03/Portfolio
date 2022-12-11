import React from "react";
import home from "../asset/peterbilt/home.png";
import category from "../asset/peterbilt/categories.png";
import add from "../asset/peterbilt/add.png";
import buyer from "../asset/peterbilt/buyer.png";
import seller from "../asset/peterbilt/seller.png";
import admin from "../asset/peterbilt/admin.png";
import "./Peterbilt.css";

const Peterbilt = () => {
  return (
    <div className="peterbilt">
      <h1 className="text-5xl font-bold my-5 text-center">Peterbilt</h1>
      <div className="grid sm:px-5  lg:px-5 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <img src={home} alt="" />
        <img src={add} alt="" />
        <img src={category} alt="" />
        <img src={buyer} alt="" />
        <img src={seller} alt="" />
        <img src={admin} alt="" />
      </div>
      <div className="w-3/4 mx-auto my-5 	 ">
        <div className="collapse rounded-lg">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <h2 className="font-bold text-white text-center">Details</h2>
          </div>
          <div className=" collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className="font-semibold px-10  my-2 text-white">
              *** Project Name- PeterBilt . A second hand trucks buy and sell
              platform.
            </p>
            <p className="font-semibold px-10  my-2 text-white">
              *** Project Live Link- peterbilt-8dc71.web.app.
            </p>
            <p className="font-semibold px-10  my-2 text-white">
              *** React, Tailwind, React query, swiper js etc used in this
              project.
            </p>
            <p className="font-semibold px-10  my-2 text-white">
              *** User can book a truck and can watch the overall order of
              himself or herself.
            </p>
            <p className="font-semibold px-10  my-2 text-white">
              *** Seller can add a product to sell, can advertise the unsold
              product and also can view the all of his or her products.
            </p>
            <p className="font-semibold px-10  my-2 text-white">
              *** Admin can seee all the buyers and sellers.
            </p>
            <p className="font-semibold px-10  my-2 text-white">
              *** Admin can provide admin role from his or her dashboard.{" "}
            </p>
            <p className="font-semibold px-10  my-2 text-white">
              *** Admin can delete any user , buyer, seller as his or her wish.{" "}
            </p>
            <p className="font-semibold px-10  my-2 text-white">
              *** Admin can see the products which are reported by users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peterbilt;

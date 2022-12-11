import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-center my-5">Contact Me</h1>
      <div>
        <form
          action="https://formsubmit.co/fahimshahriarakash03@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="my-2 input input-bordered w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 input input-bordered w-full max-w-xs"
          />
          <br />
          <textarea
            className="my-2 textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
          <br />
          <button className="btn btn-secondary " type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

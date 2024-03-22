import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await response.json();
      if (response.ok) {
        toast.success("Book Add Successfull");
      } else {
        toast.error("Something Wrong");
      }
    } catch (error) {
      console.log(error);
    }
    setData({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center  py-15 px-10  gap-20 min-w-[600px] w-auto">
        <h1 className="text-4xl md:text-6xl text-fuchsia-900 mt-10 font-bold">
          Get In Touch
        </h1>
        <div className="  flex flex-col justify-center shadow-2xl md:w-[600px] p-7 rounded-lg ">
          <form action="">
            <div className=" p-3">
              <input
                className=" text-xl p-3 rounded-full shadow-md w-[450px] outline-none"
                type="text"
                placeholder="First Name"
                onChange={inputHandler}
                value={data.first_name}
                name="first_name"
              />
            </div>

            <div className="p-3">
              <input
                className=" text-xl p-3 rounded-full shadow-md w-[450px] outline-none"
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={inputHandler}
                value={data.last_name}
              />
            </div>

            <div className="p-3">
              <input
                className=" text-xl p-3 rounded-full shadow-md  w-[450px] outline-none"
                type="number"
                placeholder="Phone"
                name="phone"
                onChange={inputHandler}
                value={data.phone}
              />
            </div>

            <div className="p-3">
              <input
                className=" text-xl p-3 rounded-full shadow-md  w-[450px] outline-none"
                type="email"
                placeholder="Email"
                name="email"
                onChange={inputHandler}
                value={data.email}
              />
            </div>

            <div className="p-3">
              <textarea
                cols={10}
                rows={6}
                className=" text-xl p-3 rounded shadow-md  w-[450px] outline-none"
                type="email"
                placeholder="Message"
                name="message"
                onChange={inputHandler}
                value={data.message}
              />
            </div>

            <div className="p-3">
              <button
                onClick={submitHandler}
                className="text-xl font-semibold px-8 py-4 bg-fuchsia-900 text-white hover:bg-fuchsia-700 rounded-full"
                value={"submit"}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

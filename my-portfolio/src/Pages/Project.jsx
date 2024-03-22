import React, { useState } from "react";
import { toast } from "react-toastify";

function Project() {
  const [data, setData] = useState({
    project_name: "",
    project_description: "",
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
      const response = await fetch("http://localhost:8000/api/project", {
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

      setData({
        project_name: "",
        project_description: "",
      });
    } catch (error) {
      console.log(error);
    }
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
                placeholder="Project Name"
                onChange={inputHandler}
                value={data.project_name}
                name="project_name"
              />
            </div>

            <div className="p-3">
              <textarea
                cols={10}
                rows={6}
                className=" text-xl p-3 rounded shadow-md  w-[450px] outline-none"
                type="email"
                placeholder="Description"
                name="project_description"
                onChange={inputHandler}
                value={data.project_description}
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

export default Project;

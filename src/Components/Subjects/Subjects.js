import React from "react";

const Subjects = (props) => {
   const  subject = props.subject
  return (
    <div className="">
      <div className="">
        <div className="card w-75 shadow-xl rounded-none bg-white">
          <figure className="">
            <img
              src={subject.image}
              alt="Book"
              className="rounded-t-lg w-full h-44 object-cover"
            />
          </figure>
          <div className=" items-center text-center">
            <div className="my-5">
              <h4 className=" ">{subject.name}</h4>
              <p> Study hour: {subject.duration}h</p>
            </div>
            <div className="">
              <button onClick={() =>props.addToList(subject)} className=" bg-cyan-400  border-t-2 w-full border-slate-700 px-4 py-2   rounded-b-md text-white outline-none hover:bg-blue-800  shadow-lg transform active:scale-95 transition-transform">
               Add to list
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;

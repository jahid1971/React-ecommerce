import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Subjects from "./Components/Subjects/Subjects";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
// import { parse } from "postcss";
import Blog from "./Components/Blog/Blog";


const App = () => {
  const [subjects, setSubjects] = useState([]);
  let [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    fetch("subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);
  const addToList = (subject) =>{
       setTotalTime (totalTime+parseFloat(subject.duration))
       console.log(totalTime,subject.id)

}

  return (
    <div className=" bg-slate-100 flex md:justify-between ">
      <div className="w-3/4 ">
        <div className="w-9/12 mx-auto mb-5 ">
          <Header></Header>
          <h5 className="my-3">Select Today's Subject</h5>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {subjects.map((subject) => (
              <Subjects subject={subject} key={subject.id} addToList={addToList}></Subjects>
            ))}
          </div>
          <Blog></Blog>
        </div>
      </div>

      <div className="w-1/4 sidebar ">
         <Sidebar totalTime={totalTime}></Sidebar>
      </div>
    </div>
  );
};

export default App;

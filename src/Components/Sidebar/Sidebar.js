import React, { useState } from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import StudyDuration from '../StudyDuration/StudyDuration';
import swal from 'sweetalert';


const Sidebar = (props) => {
    const [breakDuration , setBreakDuration] = useState(0)
    // console.log(props.totalTime,"side")
    const AddBreak = (breakTime) => {
        localStorage.setItem("breakDuration" , breakTime)
         const newBreakDuration = localStorage.getItem("breakDuration")
        setBreakDuration(newBreakDuration)
    }
    // const compieted = () =>
    return (
        <div className=' h-[100vh] w-10/12 ml-0 bg-white sticky top-0 '>
            <div className='w-10/12 mx-auto py-5'>
            <Profile></Profile>
            <Break AddBreak={AddBreak} ></Break>
            <StudyDuration totalTime = {props.totalTime}  breakDuration={breakDuration}></StudyDuration>
            <button  onClick={() => swal("Congratulations", "Today's study has been completed", "success")}
            className='bg-cyan-400   w-full  px-4 py-2 mt-8  rounded-md text-white outline-none hover:bg-blue-800  shadow-lg transform active:scale-95 transition-transform'>
            Study Comleted</button>
            </div>
        </div>
    );
};

export default Sidebar;
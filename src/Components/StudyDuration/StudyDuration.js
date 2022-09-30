import React from 'react';

const StudyDuration = (props) => {
    // console.log(props.totalTime,"studty")
    return (
        <div>
             <h5>Study Duration</h5>
             <div className='flex justify-between px-7 py-2 bg-slate-200 rounded-lg mt-1'>
                 <h6>Estimated Time:</h6>
                 <div>
                    {props.totalTime}h
                 </div>
             </div>
             <div className='flex justify-between px-7 py-2 bg-slate-200 rounded-lg mt-3'>
                 <h6>Break Time:</h6>
                 <div>
                    {
                    localStorage.getItem("breakDuration") ? localStorage.getItem("breakDuration"):props.breakDuration
                    }m
                 </div>
             </div>
        </div>
    );
};

export default StudyDuration;
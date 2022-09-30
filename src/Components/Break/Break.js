import React from 'react';

const Break = (props) => {
    return (
        <div className='my-7 '>
            <h5>Add a break</h5>
            <div className='flex justify-around mt-2 gap-2 bg-slate-200 p-2 rounded-lg'>
                <button onClick={() => props.AddBreak(10)} className='bg-cyan-400 px-2 py-2 rounded-full text-center '>
                10m</button>
                <button onClick={() => props.AddBreak(20)} className='bg-cyan-400 px-2 py-2 rounded-full text-center '>
                20m</button>
                <button onClick={() => props.AddBreak(30)} className='bg-cyan-400 px-2 py-2 rounded-full text-center '>
                 30m</button>
                <button onClick={() => props.AddBreak(40)} className='bg-cyan-400 px-2 py-2 rounded-full text-center '>
                 40m</button>
            </div>

        </div>
    );
};

export default Break;
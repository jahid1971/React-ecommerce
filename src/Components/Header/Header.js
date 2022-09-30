import React from 'react';
import img from '../../images/study.png'

const Header = () => {
    return (
        <div className='flex mt-10 mb-7 items-center'>
            <img src={img} alt="" className='w-10 h-10 mr-4' />

            <div>
                 <h3 className='text-cyan-400'> Study Planning</h3>
            </div>
        </div>
    );
};

export default Header;
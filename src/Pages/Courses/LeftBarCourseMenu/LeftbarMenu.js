import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftbarMenu = ({ sidemenu }) => {
    const { id, title } = sidemenu;
    return (
        <div>
            <div className=" bg-gray-300 shadow-xl pb-2 pt-2 rounded">

                <NavLink to={`/courseDetails/${id}`}
                    className='py-2'>
                    <p className='pl-4 text-xl font-bold bg-red-200 mx-2 py-2 rounded-lg'> {title}</p>
                </NavLink>


            </div>
        </div>
    );
};

export default LeftbarMenu;
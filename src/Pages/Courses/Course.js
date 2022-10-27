import React from 'react';

const Course = ({ course }) => {
    const { id, img, sector, title, description, price } = course;
    return (
        <div className=' '>
            <div className="transform hover:-translate-y-3 to-hover text-center secondary-bg transition duration-300 w-full mx-auto bg-gray-200 rounded-2xl">
                <div className="card h-[550px]  bg-base-100 shadow-xl rounded-2xl">


                        <figure className="px-10 pt-10">
                            <img  src={img} alt="courses" className="rounded-xl h-60" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl font-bold mb-0">{title}</h2>
                            <p className='mt-0'><small>{sector}</small></p>
                            <p>{description}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    

                </div>
            </div>
        </div>

    );
};

export default Course;
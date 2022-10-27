import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            {/* <h1>{allCourses.length}</h1> */}
            <h1 className="ml-4 md:ml-20 mt-10 text-4xl font-bold text-violet-700 font-serif">Find The Right <br />
                Online Course For You</h1>
            <p className="ml-4 md:ml-20 text-red-400 font-serif">You don't have to struggle alone, you've got our assistance and help.</p>
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mx-auto rounded-2xl pt-8 pb-16">
                {
                    allCourses?.slice(0, 6).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;
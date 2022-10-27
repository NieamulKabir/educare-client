import React from 'react';
import Course from '../Courses/Course';
import Courses from '../Courses/Courses';
import Banner from './Banner/Banner';
import CoreValue from './CoreValue/CoreValue';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CoreValue></CoreValue>
            <Courses></Courses>
        </div>
    );
};

export default Home;
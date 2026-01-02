import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import MyQuality from './MyQuality';
import Skills from './Skills';
import About from './About';
import RecentWork from './Projects';
import Experience from './Exprience';
import Blogs from './BlogPage';
import Contact from './Contact';
import Loading from './Loading';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <MyQuality></MyQuality>
            <Skills></Skills>
            <RecentWork></RecentWork>
            <Experience></Experience>
            <Blogs></Blogs>
            <Contact></Contact>
            {/* <Loading></Loading> */}
        </div>
    );
};

export default Home;
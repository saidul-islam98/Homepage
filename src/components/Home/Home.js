import React from 'react';
import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';
import Project3 from '../Projects/Project3';
import Project4 from '../Projects/Project4';
import Project5 from '../Projects/Project5';
import Project6 from '../Projects/Project6';
import TitleAc from '../Projects/TitleAc';
import TitlePr from '../Projects/TitlePr';
import Bgdtheme from '../backgroundtheme/Bgdtheme';

const Home = () => {
  
  return (
    <div className="Home">
        <Bgdtheme />
        <TitleAc />
        <Project1 />
        <Project2 />
        <TitlePr />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
    </div>
  );
}

export default Home;

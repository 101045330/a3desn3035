import React from 'react';
//import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
// import Assignment from './Assignment';
import Assignment01 from './Assignment01';

import Assignment02 from '../../pages/Assignment02';
import Assignment03 from '../../pages/Assignment03';
import WeekWise from '../../pages/WeekWise';
//import MyPdfViewer from '../MyPdfViewer ';

import Labs from './Labs';

const Section = () => {
  return (
    <section id='content_area' className='flex_row' >
     
        <Routes>

          <Route path="/" element={<WeekWise />} />

          {/*<Route path="/assignment" element={<Assignment />} />*/}
          <Route path="/assignment01" element={<Assignment01 />} />
          <Route path="/assignment02" element={<Assignment02 />} />

          {/*<Route path="/assignment03" element={<>A3</>} />*/}
          <Route path="/assignment03" element={<Assignment03 />} />
          <Route path="/labs" element={<Labs />} />

        </Routes>

      { /* <MyPdfViewer />show pdf */}

    </section>
  )
}

export default Section 

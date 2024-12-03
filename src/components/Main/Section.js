import React from 'react'
import Assignment from './Assignment'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Labs from './Labs'

const Section = () => {
  return (
    <section style={{
      width:"100%"
    }}>

        <Routes>
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/assignment1" element={<>A1</>} />
            <Route path="/assignment2" element={<>A2</>} />
            <Route path="/assignment3" element={<>A3</>} />
            <Route path="/labs" element={<Labs />} />
          </Routes>

    </section>
  )
}

export default Section
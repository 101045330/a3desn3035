import React from 'react'
import Section from './Main/Section'
import Sidebar from './Main/Sidebar'

const Main = () => {
  return (
    <main className="flex_row" style={{ justifyContent: 'space-between', width: 'auto' }}>

      <Section />
      <Sidebar />
    </main>
  )
}

export default Main
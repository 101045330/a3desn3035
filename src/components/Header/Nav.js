import React from 'react'

const Nav = () => {
  return (

    <nav id="top_navigation" className="flex_row" aria-label="Main Navigation" style={{ width: 'auto' }}>
    <ol className="flex_row justify_content_fCenter">
      <li style={{ background: 'none', backgroundColor: 'rgb(155, 116, 162)', color: 'bisque' }}>
        <a href="{{#}}" style={{ color: 'bisque' }}> &#8594; Home </a>
      </li>
      <li>
        <a 
          href="index.html" 
          className="tooltip" 
          title="404 Error" 
          style={{ pointerEvents: 'none', textDecoration: 'line-through' }}
        >
          &#8594; Lab 1
        </a>
      </li>
      <li>
        <a 
          href="lab2.html" 
          className="tooltip" 
          title="Lab 02" 
          style={{ paddingTop: '20px' }}
        >
          &#8594; Lab 2
        </a>
      </li>
      <li>
        <a href="lab3.html" className="tooltip" title="Lab 03">
        &#8594; Lab 3
        </a>
      </li>
    </ol>
  </nav>

  )
}

export default Nav
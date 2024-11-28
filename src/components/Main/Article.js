import React from 'react'

const Article = () => {
  return (

    <article id="describe" style={{ justifyContent: 'center', padding: '30px' }}>
      <h2> Article Title 1 </h2>

      <blockquote> This page demonstrate solution to the following assignment assigned to FrontEnd Design Students
        in the year Sep 2024. </blockquote>


      <h4> Instructions </h4>
      <h3> Objective </h3>

      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {`
Students will be asked to develop and deploy a simple HTML and CSS based website (featuring at least three pages) using GitHub Pages, building upon their experience with Exercise #1. You are welcome to use third-party design software such as Webflow.

*Addendum: You should NOT use React or npm as part of this assignment, as those should be reserved for Assignment 3. Please focus on simple HTML and CSS, as well as the materials covered during Exercise 1.

][][][][][][][
][ DELIVERY ][
][][][][][][][

- Public URL of the completed website hosted by GitHub Pages
- Public URL of the corresponding GitHub repository
- Additional Notes

15% assigned per valid submission

This assignment is designed for open-ended exploration and experimentation, but will be subject to potential penalty based on submission timing and validity of submitted entry.

][][][][][][][
][ CRITERIA ][
][][][][][][][

[Experience] (5%)

 - Each page must include its own title and its own description
 - Technical formatting of the page must adhere to best practices of prototype design
 - Images must be sized appropriately
 - Proper use of images, links, and other media elements
 - Writing skills, grammar, spelling, style etc.
 - The content is well written and does not have spelling or grammatical errors
 - The content is well formatted and considers punctuation, readability, typography, etc.

[Functionality] (5%)

 - All links work as expected and lead to the appropriate screen
 - There are no "screen-not-found" errors
 - Links click to the page they are referring to
 - Forms, search, music playing or other special functionality works as expected
 - Images load fast

[Design] (5%)

 - Orientation: Users will always know where they are in the prototype
 - Interaction: Users will always know how to navigate through the prototype
 - Target market and demographic
 - Screen size and resolution
 - Visual balance, composition, colour theory and artistic expression
 - Consideration of visual hierarchy, elements and principles of design
 - Inspiration

 https://github.com/collections/github-pages-examples
 https://www.awwwards.com/websites/bootstrap/

 https://onepagelove.com/
 https://webflow.com/made-in-webflow/microsite

][][][][][][][
][ DEADLINE ][
][][][][][][][

October 1, 2024 at 11:59PM (tentative)
    Fixed penalty of 10%, equivalent to 1.5% of the final grade, for late submission
        Due on Oct 1, 2024 11:59 PM
`}
      </pre>

    </article>
  )
}

export default Article
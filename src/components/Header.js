import React from 'react'
import Nav from './Header/Nav'
//import { Helmet } from 'react-helmet';
const Header = () => {
    return (

        
            /*<Helmet>
                <meta charSet="utf-8" />
                <title>DESN 3035 - </title>
                <meta name="description" content="must change pagewise" />
                <meta property="og:title" content="must change pagewise" />
                <meta property="og:description" content="must change pagewise" />
                <meta property="og:image" content="path/to/image.jpg" />
            </Helmet>
            */

            <header class="flex_row" >

                <section id="header_left">
                    <img src="./assets/photo9.jpg" alt="Logo Placeholder" height="150" width="200" />
                </section>

                <section class="flex_col" >

                    <div class="progress-circle">25%</div>
                    <em>Course Completion : </em>
                </section>

                <section id="header_right" class="flex_col" >
                    <h1 > Lab Archive </h1>
                    <h3>
                        Lab class information Zone !
                    </h3>
                </section>
                <Nav/>
            </header>





    )
}

export default Header
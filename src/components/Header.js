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
        <>
            <header className="flex_row" >

                <section id="header_left" className="flex_col" style={{ alignItems: 'center', paddingTop: '1em' }} >

                    <div className="progress-circle">95%</div>
                    <em> Course is complete </em>
                </section>
                <section id="header_right" className="flex_col" >
                    <Nav />
                </section>

            </header>

        </>
    )
}

export default Header
import React from 'react'
import Nav from './Header/Nav'
import { Helmet } from 'react-helmet';
const Header = () => {
    return (

<>
<Helmet>
    <meta charSet="utf-8" />
    <title>DESN 3035 - </title>
    <meta name="description" content="must change pagewise" />
    <meta property="og:title" content="must change pagewise" />
    <meta property="og:description" content="must change pagewise" />
    <meta property="og:image" content="path/to/image.jpg" />
</Helmet>

<header>
    <h1> H1 tagline </h1>
    <Nav />

</header>
</>
    )
}

export default Header
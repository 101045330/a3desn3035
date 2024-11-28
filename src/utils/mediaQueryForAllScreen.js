//Custom made script for this assignment that injects :          //
    // (1) adaptable media query css that can be overridden         //
    // (2) default behaviour of several semantic structural tags    //

// Function to append CSS to the head
function appendCSS(css) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

// Define media queries with complex CSS
const mediaQueries = [
    {
        //  /* Styles for mobile devices (max-width: 600px) */ //
        query: '(max-width: 600px)',
        css: `
            body { background-color: lightblue; }
            header, footer { display: none; }
            nav, aside, main { width: 100%; display: block; }
            #mapout{display:none;}
        `
    },
    
    {
        // /* Styles for tablets (min-width: 601px) and (max-width: 768px) */ //
        query: '(min-width: 601px) and (max-width: 1024px)',
        css: `
            header, footer {
                display: block;
                width: 100%;
            }
            nav, aside {
                display: inline-block;
                width: 25%;
            }
            main {
                display: inline-block;
                width: 50%;
            }
            #mapout{display:block;}
        `
    },

    {
        //  /* Styles for desktops (min-width: 1025px) */ //
        query: '(min-width: 1025px)',
        css: `
            body { background-color: lightgreen; }
            header, footer { display: block; width: 100%; }
            nav { display: inline-block; width: 20%; }
            aside { display: inline-block; width: 20%; }
            main { display: inline-block; width: 60%; }
            #mapout{display:block;}
        `
    },
    {
        query: '(orientation: portrait)',
        css: `
            body { background-color: lightcoral; }
            header, footer { display: block; width: 100%; }
            nav, aside, main { width: 100%; display: block; }
        `
    },
    {
        query: '(orientation: landscape)',
        css: `
            body { background-color: lightgoldenrodyellow; }
            header, footer { display: block; width: 100%; }
            nav { display: inline-block; width: 25%; }
            aside { display: inline-block; width: 25%; }
            main { display: inline-block; width: 50%; }
        `
    }
];

// Function to check and apply media queries
function applyMediaQueries() {
    mediaQueries.forEach(mq => {
        const mediaQueryList = window.matchMedia(mq.query);
        if (mediaQueryList.matches) {
            appendCSS(mq.css);
        }
        mediaQueryList.addEventListener('change', (event) => {
            if (event.matches) {
                appendCSS(mq.css);
            }
        });
    });
}


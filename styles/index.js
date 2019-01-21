import React from 'react';

const Style = () => (
    <style global jsx="true">
        {`
            h1, a, p {
                font-family: Arial;
            }

             ul {
                padding: 0;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}
    </style>
);

export default Style;
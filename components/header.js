import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const HEADER_PATHS = [
    { link: '/', name: 'Home' },
    { link: '/about', name: 'About' },
]

const linkStyle = {
    marginRight: 15
}

export default withRouter(({ router }) => {
    const hasBack = HEADER_PATHS.findIndex(item => item.link === router.route) === -1;
    const onBack = e => {
        e.preventDefault();
        router.back();
    }
    return (
        <div>
            {
                hasBack
                && (
                    <a onClick={onBack} href='' style={linkStyle}>
                        Back
                    </a>
                )
            }
            {
                HEADER_PATHS.map(item => (
                    <Link key={item.link} href={item.link}>
                        <a style={linkStyle}>{item.name}</a>
                    </Link>
                ))
            }
        </div>
    )
});
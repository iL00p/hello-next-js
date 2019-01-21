import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/layout';
import { TV_API_URL } from '../constants/config';

const PostLink = ({ title, id }) => (
    <li>
        <Link as={`/p/${id}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

const Index = ({ shows }) => (
    <Layout>
        <h1>Batman Shows</h1>
        <ul>
            {
                shows.map(({ show }) => (
                    <PostLink id={show.id} title={show.name} key={show.id} />
                ))
            }
        </ul>
    </Layout>
);

Index.getInitialProps = async function () {

    const res = await fetch(`${TV_API_URL}?q=batman`);
    const data = await res.json();

    return {
        shows: data,
    }
}

export default Index;
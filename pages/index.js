import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';

const PostLink = ({ title, id }) => (
    <li>
        <Link as={`/p/${id}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id='hello-next' title="Hello Next.js" />
            <PostLink id='learn-next' title="Learn Next.js is awesome" />
            <PostLink id='deploy-app' title="Deploy apps with Zeit" />
        </ul>
    </Layout>
);
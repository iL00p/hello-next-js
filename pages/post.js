import React from 'react';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/layout';
import { TV_API_URL } from '../constants/config';

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`${TV_API_URL}shows/${id}`);
    const data = await res.json();

    return {
        show : data,
    };
};

export default withRouter(Post);
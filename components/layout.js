import React from 'react';
import Header from './header';
import Style from '../styles';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

export default ({ children }) => (
    <div style={layoutStyle}>
        <Header />
        {children}
        <Style/>
    </div>
);
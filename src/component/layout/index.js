import React from 'react'
import Header from '../header/header';
import Post from '../post/post';
import Footer from '../footer/footer';
import Main from '../main/index';
import './index.css'
export default function index() {
    return (
        <div className="layout">
            <Header />
            <Main/>
            {/* <Footer/> */}
        </div>
    )
}

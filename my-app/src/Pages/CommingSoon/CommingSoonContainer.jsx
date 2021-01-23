import React, { Component } from 'react'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

export default class CommingSoonContainer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Contact/>
                <Footer/>
                <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>

            </div>
        )
    }
}

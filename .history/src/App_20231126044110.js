/* eslint-disable no-unused-vars */
import React from 'react';
import i

import {Sham,Blog,Header,Footer } from './container';
import {Cta,Feature,Navbar,Brand,Article} from './component';

const App = () => {
  return (
    <div className='App'>
    <div className='gradient_bg'>
    <Navbar />
    <Header/>

    </div>
    <Brand/>
    <Feature/>
    <Sham/>
    <Cta/>
    <Blog/>
    <Footer/>
    <Article/>

    </div>
  )
}

export default App
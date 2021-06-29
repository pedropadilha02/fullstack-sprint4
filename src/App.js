import React from 'react'
import { Fragment } from 'react';
import './App.css';
import { Header } from './Header/Header'
import { ProductPage } from './ProductPage/ProductPage'
import Footer from './Footer/Footer'

function App() {
  return (
    <Fragment>
    <Header/>
    <ProductPage/>
    <Footer/>
    </Fragment>
  );
}

export default App;

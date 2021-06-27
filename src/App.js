import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header'
import ProductPage from './components/ProductsPage/ProductsPage'
import Footer from './components/Footer/Footer'
import Message from './components/Message'


class App extends Component {
  render() {
  return (
    <Fragment>
      <Message/>
      <div class="page-container">
        <Header/>
        <ProductPage/>
        <Footer/>
      </div>
    </Fragment>
  );
  }
}

export default App;

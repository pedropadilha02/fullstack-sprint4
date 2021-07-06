import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { ProductPage } from './components/ProductPage/Products/ProductPage';
import Footer from './components/Footer/Footer';
import { SearchProvider } from './context/SearchContext';
import { MessageProvider} from './context/MessageContext'
import { MessageAlert } from './components/Header/Message'
import { Spinner } from './components/ProductPage/Spinner/Spinner';
import { LoadingProvider} from './context/LoadingContext'

function App() {
  
  

  return (
    <Fragment>
        <SearchProvider>
          <MessageProvider>
            <LoadingProvider>
              <MessageAlert/>
              <Header/>
              <ProductPage/>
              <Spinner/>
            </LoadingProvider>
          </MessageProvider>
        </SearchProvider> 
      <Footer/>
    </Fragment>
  );
}

export default App;

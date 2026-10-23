import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext';
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
  <BrowserRouter>
    <ShopContextProvider> 
      <App />
    </ShopContextProvider>
  </BrowserRouter>
  </LanguageProvider>,
)

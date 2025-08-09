import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins/600.css'; // For headings
import '@fontsource/poppins/700.css'; 
import '@fontsource/inter/400.css';   // For body
import '@fontsource/inter/500.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)

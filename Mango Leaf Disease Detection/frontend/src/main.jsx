import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import {BrowserRouter} from "react-router-dom"
import { DrawerProvider } from './Components/Context/Drawer.jsx'
import './Components/LocationPicker/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <React.Suspense fallback="loading...">
      <DrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DrawerProvider>
    </React.Suspense>
  </React.StrictMode>
)

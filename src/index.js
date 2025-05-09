import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import FavoriteProvider from "./context/FavoriteContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>

)

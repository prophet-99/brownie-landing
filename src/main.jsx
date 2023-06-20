import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Preloader */}
      <div id="preloader">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
      {/* Preloader */}
      {/* Sidebar */}
      <Sidebar />
      {/* Sidebar */}
      {/* Content */}
      <div id="content" className="col-md-10 split">
        <AppRoutes />
      </div>
      {/* Content */}
    </BrowserRouter>
  </React.StrictMode>
);

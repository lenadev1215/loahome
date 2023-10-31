import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../../ScrollToTop';

const Common = ({ children, type, title }) => {
  return (
    <div id="container">
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      
      <div className="content">
        {children}
      </div>

    </div>
  );
};

export default Common;
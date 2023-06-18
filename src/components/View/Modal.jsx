
import React from 'react';

import portfolios from '../../assets/data/portfolioData';


const Modal = ({activeID, setShowModal}) => {
  const portfolio = portfolios.find(portfolio => portfolio.id === activeID);
 if (!portfolio) {
    // console.error(`Could not find portfolio with ID ${activeID}`);
    return null; // Or render an error message or fallback component
  }

  return (
  <div className="w-full h-full fixed top-0 z-10 bg-headingColor bg-opacity-40">
 <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
  <div>
  <figure>
  <img src={ portfolio.imgUrl } alt="" />
  </figure> 
  </div>
    </div>
  </div>
   
  );
}

export default  Modal;
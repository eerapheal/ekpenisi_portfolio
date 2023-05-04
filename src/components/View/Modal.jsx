import React from 'react';
import React, {useState, useEffect} from 'react';

import portfolios from '../../assets/data/portfolioData';
import data from '../../assets/data/portfolioData';
import portfolios from '../../assets/data/portfolioData';


const Modal = ({activeID, setShowModal}) => {
  const img = {imgUrl}
  const portfolio = portfolios.find(portfolio => portfolio.id === activeID);

  return (
  
    <>
      <figure>
      {portfolio.imgUrl}
      <img src={ portfolio.imgUrl } alt="" />
      </figure>
    </>
  );
}

// export default Modal;

export default  Modal;
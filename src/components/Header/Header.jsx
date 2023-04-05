import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[80px] loading-[80px] flex items-center">
      <div className="container">
        <div className=" flex items-center gap-[10px]">
          <span className="w-[35px] h-[45px] bg-primaryColor text-white text=[18px] font-[500] rounded-full flex items-center justify-center">
          R
          </span>
          <div className="leading-[20px">
            <h2 className="text-xl text-smallTextColor font-[700]">Ekpenisi</h2>
            <p className=" text-[14px] text-smallTextColor font-[500]">E. Raphael</p>
          </div>
        </div>
      </div>
    </header>   
  )
}

export default Header;
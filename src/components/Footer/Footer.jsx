import React from 'react';

const Footer = () => {
  return (
    <section className="bg-gray-700">
      <div>
         <div className="text-white px-9">
        <p>© 2023 E.E. Raphael. All rights reserved.</p>
      </div>
    <div class="flex justify-center items-center">
    <span className="text-white max-w-[590px] font-[500] m-2">
                connect with me:
              </span>
    <ul class="flex gap-[29px]">
      <li>
        <a  className="text-white text-[20px] font-[700]" href="https://www.github.com/eerapheal/" target="_blank"> <i class="ri-github-fill"></i></a>
      </li>
      <li>
        <a  className="text-white text-[20px] font-[700]" href="https://www.linkedin.com/in/ekpenisi-e-raphael-9678a221a/" target="_blank"> <i class="ri-linkedin-box-fill"></i></a>
      </li>
      <li>
        <a  className="text-white text-[20px] font-[700]" href="https://www.twitter.com/ekpenisiraphael/" target="_blank"> <i class="ri-twitter-fill"></i></a>
      </li>
      <li>
        <a  className="text-white text-[20px] font-[700]" href="https://www.medium.com/@ekpenisiraphael/" target="_blank"> <i class="ri-medium-fill"></i></a>
      </li>
    </ul>
    </div>
   </div>
    </section>
  )
}

export default Footer;
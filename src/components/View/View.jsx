import React from 'react';
import heroImg from '../../assets/images/hero.png';
const View = () => {

  return ( 
    
      <section className="pt-0"id="about">
        <div className="container pt-14">
          <div class="md:flex items-center justify-between sm:flex-col md:flex-row">
            <div>
            <h4 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font[700] text[19px]'>
                Hey There
            </h4>
            <h1
              data-aos='fade-up' data-aos-duration='1500'
              className="text-deadingColor font-[700] text-[1.6rem] sm:text-[40px] loading-[46px] sm:loading-[46px] mt-5"
            >
              I'am Ekpenisi E Raphael <br /> Full-Sack Software Developer
            </h1>
            <div 
              data-aos='fade-down' data-aos-duration='1800' data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-promary text-smallTextColor font-[500] py-2 px-4 round-[10px]
                  hover:font[500] rounded-[10px] hover:bg-smallTextColor hover:text-white easy-in duration-700"
                >
                  <i class="ri-mail-line"></i>Hire me
                </button>
              </a>

              <a 
                className="text-smallTextColor font-[600] text-[16px] border-solid border-smallTextColor"
                href ="#portfolio"
              >
                See Portfolio
              </a>
            </div>
            <p 
              data-aos='fade-right' data-aos-duration='1500'
              className="text-smallTextColor max-w-[590px] font-[500] text-[16px]  loading-7 mt-10 flex ms:pr-12"
            >
            Hi, I'm a Full Stack Developer with expertise in both front-end and back-end technologies. I have a passion for building dynamic and responsive web applications and have experience working with a variety of technologies including HTML, CSS, JavaScript, React/Redux, Postgresql, Ruby and Ruby on Rails. I am comfortable working on both the client and server side of a web application and have a proven track record of delivering high-quality, functional, and user-friendly websites. I am always eager to learn new technologies.
            </p>
            <div
              className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor max-w-[590px] font-[500]">
              connect with me:
              </span>
              <span>
                <a 
                  href="https://github.com/eerapheal" className="text-smallTextColor text-[18px] font-[600]" alt="GitHub">
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a 
                  href="https://www.twitter.com/ekpenisiraphael" className="text-smallTextColor text-[18px] font-[600]" alt="Twitter">
                  <i class="ri-twitter-fill"></i>
                </a>
              </span>
              <span>
                <a 
                  href="https://www.linkedin.com/in/ekpenisiraphael/" className="text-smallTextColor text-[18px] font-[600]" alt="Linkedin">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a 
                  href="medium.com/@ekpenisiraphael/" className="text-smallTextColor text-[18px] font-[600]" alt="medium">
                  <i class="ri-medium-fill"></i>
                </a>
              </span>
            </div>
            </div>
            <div className="basis-1/3 mt-10  sm:mt-0">
              <figure data-aos="fade-left" data-aos-doration="1900">
                <img className="rounded-[20px]"src={heroImg} alt="Hero" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default View;
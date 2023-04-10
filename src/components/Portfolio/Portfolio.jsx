import React, {useState, useEffect} from 'react';
import data from '../../assets/data/portfolioData';

const Portfolio = () => {

  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState('all');

  const loadMoreMandler = () => {
    setNextItems(prev =>prev + 3 );
  };

  useEffect(() => {

    if(selectTab === 'all') {
      setPortfolios(data)
    }

    if(selectTab === 'Web Design') {
      const filteredData = data.filter(item => item.category ==='Web Design')
      setPortfolios(filteredData)
    }

    if(selectTab === 'Ux') {
      const filteredData = data.filter(item => item.category ==='Ux')
      setPortfolios(filteredData)
    }
  }, [selectTab])
  return (
  <section id='portfolio'>
   <div className='container'>
    <div className='flex items-center justify-between flex-wrap'>
      
      <div className='mb-7 sm:mb-0'>
        <h3 className='text-headingColor text-[2rem] font-[700]'>
          My recent project
        </h3>
      </div>
      
      <div class='flex gap-3'>
      <div className='flex'>
        <button onClick={() => setSelectTab('all')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4'>
          All
        </button>
      </div>
      <div className='flex '>
        <button onClick={() => setSelectTab('Web Design')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4'>
          Web Design
        </button>
      </div>
      <div className='flex'>
        <button onClick={() => setSelectTab('Ux')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4'>
          UX Design
        </button>
      </div>
      </div>
    </div>

    <div className='flex items-center gap-4 flex-wrap mt-12'>
      {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
        <div
          key = {index}
          data-aos='fade-zoom-in' data-aos-delay='20' data-aos-duration='1000'
          className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'
        >
          
         <figure>
          <img className="rounded-[8px]" src={portfolio.imgUrl} alt='portfolio'/>
         </figure>

         <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
         <div className='w-full h-full flex items-center justify-center'>
          <button className='text-white bg-headingColor hover:bg-smallTextColor  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
            See Details
          </button>
          </div>
         </div>
        </div>
      ))}
    </div>

    <div className='text-center mt-6'>
      {nextItems < portfolios.lenght && data.length > 6 && (
        <button onClick={loadMoreMandler} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
        Load more
      </button>
      )}     
      </div>
   </div>
  </section>
  )

}

export default Portfolio;
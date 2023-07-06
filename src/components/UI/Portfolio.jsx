import React, {useState,useEffect} from 'react'
import data from '../../assets/data/portfolioData'
import Modal from './Modal';

const Portfolio = () => {

    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setportfolios] = useState(data)
    const [selectTab, setSelectTab] = useState('all')
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)

    const showModalHandler = id =>{
        setShowModal(true)
        setActiveID(id)
    }
    const loadMorehandler = () => {
        setNextItems(prev => prev + 2)
    }
    useEffect(()=>{
        if(selectTab === 'all'){
            setportfolios(data)
        }
        if(selectTab === 'Web Design'){
            const filteredData = data.filter(item => item.category === "Web Design")
            setportfolios(filteredData)
        }
        if(selectTab === 'Ux'){
            const filteredData = data.filter(item => item.category === "Web Design")
            setportfolios(filteredData)
        }
    },[selectTab])
    return (
    <section id="portfolio">
        <div className="container">
            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-[2rem] font-[700]">My recent project</h3>
                </div>
                <div className="flex gap-3">
                    <button onClick={()=>setSelectTab('all')} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">C#/.NET</button>
                    <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">React</button>
                    <button onClick={()=>setSelectTab('Ux')}className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">Other</button>
                    <button onClick={()=>setSelectTab('Web Design')} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">web-design</button>
                </div>

            </div>
            <div className="flex items-center gap-4 flex-wrap mt-12">
                {
                    portfolios.slice(0,nextItems)?.map((portfolio,index)=>(
                        <div key={index} data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000" className="group max-w-full sm:w-[98.5%] md:w-[48.0%] lg:w-[48.5%] relative z-[1]">
                            <figure>
                                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
                            </figure>
                         <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 
                         hidden group-hover:block z-[5]">
                            <div className="w-full h-full flex items-center justify-center">
                                <button onClick={()=> showModalHandler(portfolio.id)} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">See Details</button>
                            </div>

                         </div>
                        </div>
                        
                ))}
            </div>
            <div className="text-center mt-6">
                {nextItems < portfolios.length && data.length > 6 &&(
                    <button onClick={loadMorehandler} className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">Load more</button>
                )}
            </div>
        </div>
        {showModal && <Modal activeID={activeID} setShowModal={setShowModal}/>}
    </section>
  )
}

export default Portfolio
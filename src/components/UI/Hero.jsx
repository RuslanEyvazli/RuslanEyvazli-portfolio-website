import React from 'react'
import HeroImg from '../../assets/images/rem.jpg'
import CountUp from 'react-countup'
const Hero = () => {
    return (
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/* ================ hero left content ================== */}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos="fade-right"
                            data-aos-duration="1500"
                            className="text-headingColor font-[600] text-[16px]">
                            Hello Welcome
                        </h5>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1500" className="text-headingColor font-[800] text-[1.8rem] sm:leading-[35px]
                            sm:text-[40px] leading-[46px] mt-5 ">
                            I'm Ruslan Eyvazli <br />
                            Software Developer
                        </h1>
                        <div data-aos="fade-right"
                            data-aos-duration="1800"
                            data-aos-duration-delay="200"
                            className="flex items-center gap-6 mt-7">
                            <a href='#contact'>
                                <button className="bg-primaryColor text-white font-[500]
                                flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[3px]"><i class="ri-mail-line"></i> Hire me</button>
                            </a>
                            <a className="text-smallTextColor font-[600] text-[16px] 
                            border-b border-solid border-smallTextColor"
                            href="#portfolio">See portfolio</a>
                        </div>
                        <p data-aos="fade-left"
                            data-aos-duration="1500"
                            className="flex gap-2 mt-14 text-headingColor font-[500] text-[15px] leading-7 sm:pl-7 sm:pr-10">
                            <span>
                                <i class="ri-apps-2-line"></i>
                            </span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias temporibus repellendus ipsa consequatur nostrum fugit modi, veritatis ullam sint sunt tempora distinctio accusamus provident tenetur nisi autem nesciunt porro?
                        </p>
                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[600]">Follow me:</span>
                            <span>
                                <a href="#" 
                                    className="text-smallTextColor text-[18px] font-[600]" 
                                    class="ri-youtube-line"></a>
                            </span>                            
                            <span>
                                <a href="#" 
                                    className="text-smallTextColor text-[18px] font-[600]" 
                                    class="ri-github-fill"></a>
                            </span>
                            <span>
                                <a href="#" 
                                    className="text-smallTextColor text-[18px] font-[600]" 
                                    class="ri-linkedin-box-fill"></a>
                            </span>
                            <span>
                                <a href="#" 
                                    className="text-smallTextColor text-[18px] font-[600]" 
                                    class="ri-twitter-line"></a>
                            </span>
                        </div>
                    </div>
                    {/* ================ hero left end ================== */}
                    {/* ================ hero image  ================== */}
                    <div className="basis-1/3 mt-10   rounded-tl-[222px] rounded-sm overflow-hidden sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <img src={HeroImg} className='max-md:rounded-tl-[222px]' alt=""/> 
                        </figure>
                    </div>
                    {/* ================ hero image end ================== */}
                    {/* ================ hero content right ================== */}
                    <div className="md:basis1/5 flex justify-between text-center mt-10 felx-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={4} duration={2} suffix="+"/>
                            </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">Years of experience</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={100} duration={2} suffix="%"/>
                            </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">Success Rate</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={4} duration={2} suffix="+"/>
                            </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">Years of experience</h4>
                        </div>
                    </div>
                    
                    {/* ================ hero content end ================== */}
                </div>
            </div>
        </section>
    )
}

export default Hero
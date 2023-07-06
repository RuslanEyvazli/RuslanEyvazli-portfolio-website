import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cubrmgm', 'template_5v36d5k', form.current, 'TqFvN1wxEfyIMSnaf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <section id="contact" className='pb-16'>
            <div className="container">
                <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Keep in Touch</h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.043601049956!2d21.084549181956024!3d52.242591694835724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd9576f4e3fd%3A0x453d92e133c3e8f5!2sIga%C5%84ska%2026%2C%2004-083%20Warszawa!5e0!3m2!1saz!2spl!4v1688568966410!5m2!1saz!2spl" className='border-0 w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                        <form ref={form} onSubmit={sendEmail} className="w-full">
                            <label>Name</label>
                            <div className="mb-5">
                                <input name="user_name" type="text" placeholder="Enter your name" className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <div className="mb-5">
                                <input name="user_email" type="email" placeholder="Enter your email" className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <div className="mb-5">
                                <input type="text" placeholder="Subject" className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <div className="mb-5">
                                <textarea name="message" type="text" rows={3} placeholder="Write your message" className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <button type="submit" className="w-full p-3 focus:outline-none rounded-[5px]  text-white bg-smallTextColor hover:bg-headingColor text-center ease-linear duration-150">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
import React from 'react';
import './about.css'
function About(){
    return(
        <div className='about'>
            <h1>About</h1>
            <div className='box'>
                <div className="box1">
                    <h1>we have more then 10 years experience in this field</h1>
                    <p>Welcome to our software development company, where innovation meets implementation. With a passion for crafting cutting-edge solutions, we specialize in delivering tailor-made software products that redefine industries. Our dedicated team of experts merges technical prowess with creative insight to transform ideas into reality. Through meticulous planning and agile methodologies, we consistently exceed expectations and drive digital transformation. With a client-centric approach, we pride ourselves on clear communication and collaborative partnerships, ensuring that every project reflects our commitment to excellence. Harnessing the power of technology, we create intuitive, scalable, and secure software that empowers businesses to thrive in the modern digital landscape. Join us on a journey to explore the limitless possibilities of software innovation.</p>
                </div>
                <div className="box2">
                    <img src="https://static.javatpoint.com/blog/images/what-is-software.png" alt="" />
                </div>

            </div>
            
         </div>
    )
    
}
export default About;
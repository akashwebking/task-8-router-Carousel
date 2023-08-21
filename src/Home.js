import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.acodez.in/wp-content/uploads/2022/03/What-is-a-mobile-app-feature-image.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Mobile Application </h5>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Website application</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://divyaltech.com/assets/images/services/desktop-application.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Desktop Application</h5>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Home
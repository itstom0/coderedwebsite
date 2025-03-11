import React from 'react';
import '../styles/HomePage.css';
import bannerImage from '../assets/coderedsitebanner.png'; // Place your banner image in the assets folder

// Instagram and GoFundMe icon image imports
import instagramIcon from '../assets/Instagram.png'; // Your Instagram icon image
import gofundmeIcon from '../assets/GoFundMe.png'; // Your GoFundMe icon image

// Robot image import
import robotImage from '../assets/robot-derec.png'; // Your robot image file

function HomePage() {
    return (
        <div className="homepage">
            <img src={bannerImage} alt="Team Banner" className="banner" />
            
            <div className="season-trailer">
                <h2>2024 - 2025 First Tech Challenge Trailer</h2>
                <a href="https://www.youtube.com/watch?v=ewlDPvRK4U4" target="_blank" rel="noopener noreferrer">
                    <button className="trailer-button">Season Trailer</button>
                </a>
            </div>

            {/* Our Robot Section */}
            <div className="robot-section">
                <h2>Our Robot: Derec</h2>
                <div className="robot-container">
                    <div className="robot-text">
                        <p>
                            Meet Dere<s>do</s>c, our First Tech Challenge robot!
                            Built to be an absolute unit, it features an extendable arm, a custom-built drive train, 
                            and an intuitive control system that allows us to navigate the arena and collect elements with ease.
                            Stay tuned for exciting updates as we continue to refine Derec for the upcoming season!
                        </p>
                    </div>
                    <div className="robot-image">
                        <img src={robotImage} alt=" the robot" />
                    </div>
                </div>
            </div>

            {/* Footer with social links and copyright */}
            <footer className="footer">
                <div className="social-links">
                    <a href="https://www.instagram.com/coderedrednock" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
                    </a>
                    <a href="https://www.gofundme.com/f/first-tech-challenge-rednock" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={gofundmeIcon} alt="GoFundMe" className="social-icon-img" />
                    </a>
                </div>
                <p className="footer-text">© Tom Tuckwell 2025</p>
            </footer>
        </div>
    );
}

export default HomePage;

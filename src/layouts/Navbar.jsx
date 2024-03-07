import { Close, DragHandle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

    // Update the windowWidth state whenever the window resizes
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Check initially (when component mounts)
        handleResize();

        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Automatically hide menu and show drag handle icon when window width is less than 900px
    useEffect(() => {
        if (windowWidth < 900) {
            setIsMenuVisible(false); // This will hide the menu
        } else {
            setIsMenuVisible(true); // This will show the menu
        }
    }, [windowWidth]); // This effect depends on windowWidth

    return (
        <div className='navbar'>
            <a className='logo' href="#home">
                <img className='logoImg' src="https://firebasestorage.googleapis.com/v0/b/ally-health-obgyn.appspot.com/o/design-portfolio-logo.png?alt=media&token=50d72de4-76d4-4dc5-8d25-946fb0d5ffb4" alt="Welldone" style={{ height: '50px' }} />
            </a>

            <div className='navigation'>
                <IconButton onClick={toggleMenu} className='menuBtn'>
                    {!isMenuVisible &&
                        <DragHandle className='menuIcon' />
                    }

                    {isMenuVisible &&
                        <Close className='menuIcon' />
                    }
                </IconButton>

                <ul className={`menu ${isMenuVisible ? 'active' : 'hidden'}`}>
                    <li><a className='menuItem' href="#home">Home</a></li>
                    <li><a className='menuItem' href="#home">Portfolio</a></li>
                    <li><a className='menuItem' href="#home">Services</a></li>
                </ul>
            </div>
        </div>
    );
}

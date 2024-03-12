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

    // Automatically hide menu when window width is less than 900px
    useEffect(() => {
        if (windowWidth < 900) {
            setIsMenuVisible(false); // This will hide the menu
        } else {
            setIsMenuVisible(false); // This will also hide the menu initially when window is greater than 900px
        }
    }, [windowWidth]); // This effect depends on windowWidth

    return (
        <div className='navbar'>
            <a className='logo' href="#home">
                <img className='logoImg' src="https://firebasestorage.googleapis.com/v0/b/ally-health-obgyn.appspot.com/o/design-portfolio-logo.png?alt=media&token=50d72de4-76d4-4dc5-8d25-946fb0d5ffb4" alt="Logo" style={{ height: '50px' }} />
            </a>

            <div className='navigation'>
                <IconButton onClick={toggleMenu} className='menuBtn'>
                    {windowWidth < 900 && !isMenuVisible &&
                        <DragHandle className='menuIcon' />
                    }
                    {windowWidth < 900 && isMenuVisible &&
                        <Close className='menuIcon' />
                    }
                </IconButton>

                <ul className={`menu ${isMenuVisible || windowWidth >= 900 ? 'active' : 'hidden'}`}>
                    <li><a className='menuItem' href="#portfolio">Portfolio</a></li>
                    <li><a className='menuItem' href="#about">About</a></li>
                    <li><a className='menuItem' href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

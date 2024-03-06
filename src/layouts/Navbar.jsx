import { Close, DragHandle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react'

export default function Navbar() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

    return (
        <div className='navbar'>

            {/* Replace "Welldone" with an <img> tag */}
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
                    <li><a className='menuItem' href="#home">About</a></li>
                    <li><a className='menuItem' href="#home">Pricing</a></li>
                    <li><a className='menuItem' href="#home">Contact</a></li>
                </ul>
            </div>
        </div >
    )
}

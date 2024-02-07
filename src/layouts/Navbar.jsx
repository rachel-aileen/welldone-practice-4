import { Close, DragHandle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react'

export default function Navbar() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);


    return (


        <div className='navbar'>

            <a className='logo' href="#home">Welldone</a>

            <div className='navigation'>

                <IconButton onClick={toggleMenu} className='menuBtn'>
                    {!isMenuVisible &&
                        <DragHandle className='menuIcon' />
                    }

                    {isMenuVisible &&
                        <Close className='menuIcon' />
                    }
                </IconButton>



                <ul className={`menu ${isMenuVisible ? ' active' : 'hidden'}  `}>
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

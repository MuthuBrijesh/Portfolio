import React, { useRef } from 'react';
import { FaBars, FaTimes, FaIdBadge } from 'react-icons/fa';
import './Navbar.css';
import { AiTwotoneHome, AiFillProject } from 'react-icons/ai';
import { Link } from 'react-router-dom';
//import {HiDocumentText} from 'react-icons/hi';
import { BsPersonFill } from 'react-icons/bs'

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h2><Link className='link' to="./Portfolio/">Muthu</Link></h2>
            <nav ref={navRef}>
                <div className='naviiiii'><Link className='link' to="./Portfolio/"><AiTwotoneHome /> Home</Link></div>
                <div className='naviiiii'><Link className='link' to="./project"><AiFillProject /> Projects</Link></div>
                <div className='naviiiii'><Link className='link' to="./about"><BsPersonFill /> About</Link></div>
                <div className='naviiiii'><Link className='link' to="./skills"><FaIdBadge /> Skills</Link></div>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}
export default Navbar;

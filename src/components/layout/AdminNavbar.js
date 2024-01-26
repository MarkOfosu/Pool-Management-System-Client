
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import CreateUserDropdown from './Dropdown';
import logo from '../../resource/logo1.png'
import UserProfile from '../elements/UserProfile';
import Logout from '../elements/Logout';



const AdminNavbar = () => {
    const [click, setClick] = useState(false);
    const [dropdownCheckIn, setDropdownCheckIn] = useState(false);
    const [dropdownCreateSchedule, setDropdownCreateSchedule] = useState(false);
    const [dropdownCreateUser, setDropdownCreateUser] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const toggleDropdown = (dropdownSetter) => {
        if (window.innerWidth < 960) {
            dropdownSetter(prevState => !prevState);
        }
    };

    const handleMouseEnter = (dropdownSetter) => {
        if (window.innerWidth < 960) {
            dropdownSetter(false);
        } else {
            dropdownSetter(true);
        }
    };

    const handleMouseLeave = (dropdownSetter) => {
        dropdownSetter(false);
    };



    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item' onClick={() => toggleDropdown(setDropdownCheckIn)}
                    onMouseEnter={() => handleMouseEnter(setDropdownCheckIn)}
                        onMouseLeave={() => handleMouseLeave(setDropdownCheckIn)}>
                    <Link className='nav-links'>
                        Check-In User <FontAwesomeIcon icon={faCaretDown} />
                    </Link>
                    {dropdownCheckIn && <CreateUserDropdown dropdownType='checkInDropdownItems'/>}
                    </li>

                    <li className='nav-item' onClick={() => toggleDropdown(setDropdownCreateSchedule)}
                    onMouseEnter={() => handleMouseEnter(setDropdownCreateSchedule)}
                        onMouseLeave={() => handleMouseLeave(setDropdownCreateSchedule)}>
                    <Link className='nav-links'>
                        Create Schedule <FontAwesomeIcon icon={faCaretDown} />
                    </Link>
                    {dropdownCreateSchedule && <CreateUserDropdown dropdownType='createScheduleDropdownItems'/>}
                    </li>

                    <li className='nav-item' onClick={() => toggleDropdown(setDropdownCreateUser)}
                    onMouseEnter={() => handleMouseEnter(setDropdownCreateUser)}
                        onMouseLeave={() => handleMouseLeave(setDropdownCreateUser)}>
                    <Link className='nav-links'>
                        Create User <FontAwesomeIcon icon={faCaretDown} />
                    </Link>
                    {dropdownCreateUser && <CreateUserDropdown dropdownType='createUserDropdownItems'/>}

                    </li>
                    <li className='nav-item'>
                        <Link to='/admin/profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to='/logout' className='nav-links-mobile'onClick={closeMobileMenu}>
                            logout
                        </Link>
                    </li>
                    
                </ul>
               <UserProfile/>
                <Logout />
                </nav>
            </>
        );
    };

    export default AdminNavbar;
import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from  '../../assets/Globe.svg'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>                             
                <NavLink to='/' className='side-nav-links' activeclassname='active'> <i className='icon'> <AiIcons.AiFillHome /> </i>   
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active'> <i className='icon'> <AiIcons.AiFillTags/> </i>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active'> <i className='icon'> <AiIcons.AiOutlineUserAdd/> </i>
                        <p>Users</p>
                    </NavLink>
                    <br></br> 
                    <a href="http://community-stackoverflow.epizy.com/" class="stackbtn"><i className='icon'> <IoIcons.IoMdPeople /> </i><span>Community</span></a>                   
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar

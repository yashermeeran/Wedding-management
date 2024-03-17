import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, Menu } from 'semantic-ui-react'
export default function Navibars() {
    const [activeitem,setActiveitem]=useState("");
    return (
        <div>
            <Menu>
                <MenuItem
                    name='home'
                    as={Link} to ='/home'
                    onClick={()=>setActiveitem("home")}
                    active={activeitem === 'home'}
                   
                >
                    Home
                </MenuItem>

                <MenuItem
                    name='about'
                    as={Link} to ='/about'
                    onClick={()=>setActiveitem("about")}
                    active={activeitem === 'about'}
                   
                >
                    About
                </MenuItem>

                <MenuItem
                    name='contact'
                    as={Link} to ='/contact'
                    onClick={()=>setActiveitem("contact")}
                    active={activeitem === 'contact'}
                    
                >
                    Contact
                </MenuItem>
                <MenuItem
                    name='service'
                    as={Link} to ='/service'
                    onClick={()=>setActiveitem("service")}
                    active={activeitem === 'service'}
                    
                >
                    service
                </MenuItem>
            </Menu>
        </div>
    )
}

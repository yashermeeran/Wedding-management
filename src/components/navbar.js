import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Input,  } from 'semantic-ui-react';

const Navbar = () => {
    const [activeItem,setActiveitem] = useState("");
    return (
        
<Menu pointing>
        <Menu.Item
          name='home'
          as={Link} to ='/'
          active={activeItem === 'home'}
          onClick={()=>setActiveitem("home")}
        />
        <Menu.Item
          name='about'
          as={Link} to ='/about'
          active={activeItem === 'about'}
          onClick={()=>setActiveitem("about")}
        />
        <Menu.Item
          name='service'
          as={Link} to ='/service'
          active={activeItem === 'service'}
          onClick={()=>setActiveitem("service")}
        />
        <Menu.Item
          name='contact'
          as={Link} to ='/contact'
          active={activeItem === 'contact'}
          onClick={()=>setActiveitem("contact")}
        />
        <Menu.Item
          name='decoration'
          as={Link} to ='/decoration'
          active={activeItem === 'decoration'}
          onClick={()=>setActiveitem("decoration")}
        />
        <div className='contact-details'>
        <h4>+91-8148300181</h4>
         <h4>yasher0304@gmail.com</h4>
         <h4>test</h4>
        </div>
         
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
            <button>Search</button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default Navbar
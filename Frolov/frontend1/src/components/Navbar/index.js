import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle} ) => {
  
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >=80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);
  
  const toggleHome = () => {
    scroll.scrollToTop()
  }



  return (
    <>
    <IconContext.Provider value={{ color:'#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Sons of Lech</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='analysis'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Результаты анализа</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='solution'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Решения</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='setting'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Информация</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
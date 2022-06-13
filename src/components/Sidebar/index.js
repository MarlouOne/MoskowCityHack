import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='analysis' onClick={toggle}>
                    Результаты анализа
                </SidebarLink>
                <SidebarLink to='solution' onClick={toggle}>
                    Решения
                </SidebarLink>
                <SidebarLink to='setting' onClick={toggle}>
                    Информация
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
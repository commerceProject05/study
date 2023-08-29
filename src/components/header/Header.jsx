import React from 'react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

const Header = () => {
    return (
        <>
            <Wrap>

                <Logo>logo</Logo>
                <Menu>
                    <Menubutton>Counter</Menubutton>
                    <Menubutton>Todolist</Menubutton>
                </Menu>
            </Wrap>
        </>
    );
};

export default Header;

const Wrap = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 16px;
`

const Logo = styled.div`
color: ${theme.color.primary};
`

const Menu = styled.div`
    display: flex;
    gap: 16px;
`
const Menubutton = styled.div`
    color: ${theme.color.primary};
`
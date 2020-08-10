import React from 'react';
import styled from '@emotion/styled'
import logo from './logo.svg'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #1D2128;
    height: 80px;
    padding: 0 30px;
    align-items: center;
    justify-content: flex-start;
`

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 220px;
`;

const Header = props => {
    return <Wrapper>
        <Inner>
        <img src={logo} alt={"logo"}/>
        </Inner>
        <span style={{color: "white"}}>Welcome to &#123;keepable&#125;</span>
    </Wrapper>;
};

export default Header;
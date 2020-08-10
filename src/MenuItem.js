import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        background-color: #999B9E;
    }
    width: 220px;
    color: white;
    height: 48px;
`;

const MenuItem = props => {
    return (
        <Wrapper onClick={props.onClick}>
            <img alt={"icon"} src={props.icon} style={{margin: "0 19px"}}/>
            {props.children}
        </Wrapper>
    );
}

export default MenuItem;
import React from 'react';
import styled from '@emotion/styled'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1D2128;
`;

const Sidebar = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Sidebar;
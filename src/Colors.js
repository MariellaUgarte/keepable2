import React from 'react';
import styled from '@emotion/styled'

const Wrapper = styled.div`
    padding: 8px;
    bottom: 55px;
    position:  absolute;
    left: -40px;
    height: 65px;
    width: 155px;
    background-color: white;
    border-radius: 8px;
    display: ${props => props.active ? "grid" : "none"};
    grid-gap: 5px;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 26px;
`;

const Circle = styled.div`
    background-color: ${props => props.color};
    height: 20px;
    width: 20px;
    border: 1px solid #999B9E;
    border-radius: 50%;
`;

const Colors = props => {
    return (
        <Wrapper active={props.active}>
            <Circle color={"white"} onClick={() => props.updateColor("white")}/>
            <Circle color={"#F28B82"} onClick={() => props.updateColor("salmon")}/>
            <Circle color={"#FBBC04"} onClick={() => props.updateColor("orange")}/>
            <Circle color={"#FFF475"} onClick={() => props.updateColor("yellow")}/>
            <Circle color={"#CCFF90"} onClick={() => props.updateColor("green")}/>
            <Circle color={"#A7FFEB"} onClick={() => props.updateColor("teal")}/>
            <Circle color={"#CBF0F8"} onClick={() => props.updateColor("light_blue")}/>
            <Circle color={"#AECBFA"} onClick={() => props.updateColor("blue")}/>
            <Circle color={"#D7AEFB"} onClick={() => props.updateColor("purple")}/>
            <Circle color={"#FDCFE8"} onClick={() => props.updateColor("pink")}/>
        </Wrapper>
    );

};


export default Colors;
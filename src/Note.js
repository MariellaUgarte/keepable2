import React, {useState} from 'react';
import styled from '@emotion/styled';
import Palette from './Palette';
import Trash from './Trash';
import Recover from './Recover';
import Colors from './Colors';

const Wrapper = styled.div`
    position: relative;
    border-radius: 8px;
    height: 200px;
    padding: 20px;
    background-color: ${props => {
            switch(props.background) {
                case "white":
                    return "#FFFFFF";
                case "salmon":
                    return "#F28B82";
                case "orange":
                    return "#FBBC04";
                case "yellow":
                    return "#FFF475";
                case "green":
                    return "#CCFF90";
                case "teal":
                    return "#A7FFEB";
                case "light_blue":
                    return "#CBF0F8";
                case "blue":
                    return "#AECBFA";
                case "purple":
                    return "#D7AEFB";
                case "pink":
                    return "#FDCFE8";
                default:
                    return "white";
            }
        }
    };
    position: relative;
`;

const Bottom = styled.div`
    display: flex;
    position: absolute;
    left: 12px;
    bottom: 10px;
    width: 70px;
    justify-content: space-between;
`;

const Note = props => {

    const [active, setActive] = useState(false);

    return (
        <Wrapper background={props.data.color}>
            <h5>{props.data.title}</h5>
            <p>{props.data.body}</p>
            <Colors active={active} updateColor={(color) => { props.colorChange(props.data.id, color); setActive(false) } }/>
            { props.type === "notes" ? 
                <Bottom>
                    <Palette onClick={() => setActive(!active)}/>
                    <Trash onClick={() => props.softDelete(props.data.id)}/>
                </Bottom> :
                <Bottom>
                    <Trash onClick={() => props.hardDelete(props.data.id)}/>
                    <Recover onClick={() => props.recover(props.data.id)}/>
                </Bottom>
              }
        </Wrapper>
    );
}

export default Note;
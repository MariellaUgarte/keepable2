import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import Colors from './Colors'
import Palette from './Palette';
import useForm from './useForm';

const Wrapper = styled.div`
    background-color: white;
    border-radius: 8px;
    width: 60%;
    margin-bottom: 30px;
    padding: 20px;
    position: relative;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CreateNote = props => {
    const [ active, setActive ] = useState(false);
    let { inputs, handleSubmit, handleChange, colorChange } = useForm({initialValues: {title: "", body: ""}, onSubmit: props.createNote});
    const submit = useRef();
    return (
        <Wrapper>
            <form onSubmit={handleSubmit} ref={submit}>
                <input onChange={handleChange}
                        name={"title"} 
                        type={"text"} 
                        value={inputs.title}
                        placeholder={"The title for my new note"} 
                        style={{ fontWeight: "bold", border: "none", width: "100%", outline: "none" }}/>
                <textarea name={"body"} 
                            onChange={handleChange}
                            value={inputs.body}
                            type={"text"} 
                            placeholder={"Some great thought!"} 
                            style={{ border: "none", width: "100%", outline: "none", height: "55%" }}/>
            </form>
            <Bottom>
                    <Colors active={active} updateColor={(color) => { colorChange(color); setActive(false) } }/>
                    <Palette onClick={() => setActive(!active)}/>
                    <button style={{outline: "none", background: "none", border: "none", fontWeight: "bold"}} onClick={() => { submit.current.dispatchEvent(new Event('submit')) }}>Keep it!</button>
            </Bottom>
        </Wrapper>);
};

export default CreateNote;
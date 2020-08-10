import React from 'react';
import styled from '@emotion/styled';
import Note from './Note'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    grid-auto-rows: 200px;
    min-width: 100%;
    max-width: 100%;
`;



const Notes = props => {
    return (
        <Wrapper>
            { props.notes.length ? props.notes.map(note => 
                <Note
                    colorChange={props.colorChange}
                    key={note.id}
                    data={note}
                    type={props.type} 
                    softDelete={props.softDelete} 
                    hardDelete={props.hardDelete} 
                    recover={props.recover}/>) :
                <h3 style={{color: "white", textAlign: "center"}}>No hay notas</h3>    
            }
        </Wrapper>
    );
};

export default Notes;
import React, { useState, useEffect } from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';
import MenuItem from './MenuItem';
import curlybraces from './curlybraces.svg'
import trash from './trash.svg'
import Notes from './Notes';
import CreateNote from './CreateNote'

const Main = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: #1D2128;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    width: 100%;
`;

const Home = props => {

    const [ onNotes, selectNotes ] = useState(true);
    const [ notes, setNotes ] = useState([]);
    const [ deletedNotes, setDeletedNotes ] = useState([]);

    const baseURL = "http://localhost:3000/notes/"

    async function fetchNotes() {
        let response = await fetch(baseURL);
        let data = await response.json();
        setNotes(data.filter(note => !note.deleted_at));
        setDeletedNotes(data.filter(note => note.deleted_at));
    }

    async function createNote(data) {
        await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        fetchNotes()
    }

    useEffect(() => {
            fetchNotes();
        }, []
    );

    const apiDelete = async id => {
        await fetch(baseURL + id, {
            method: 'DELETE'
        })
        fetchNotes()
    }

    const apiRecover = async id => {
        await fetch(baseURL + id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deleted_at: null
            })
        }) 
        fetchNotes()
    }

    const colorChange = async (id, color) => {
        await fetch(baseURL + id, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                color: color
            })
        })
        fetchNotes();
    }

    const softDelete = async id => {
        const new_notes = notes.filter(note => {
            return note.id !== id;
        })
        setNotes(new_notes);
        await apiDelete(id);
        fetchNotes()
    };

    const hardDelete = async id => {
        const new_deleted_notes = deletedNotes.filter(note => {
            return note.id !== id;
        })
        setDeletedNotes(new_deleted_notes);
        await apiDelete(id);
        fetchNotes()
    };

    const recover = async id => {
        const new_deleted_notes = deletedNotes.filter(note => {
            return note.id !== id;
        })
        setDeletedNotes(new_deleted_notes);
        await apiRecover(id);
        fetchNotes()
    }

    return (
        <div style={{minHeight: "100vh"}}>
            <Header/>
            <Main>
                <Sidebar>
                    <MenuItem icon={curlybraces} onClick={() => selectNotes(true)}>Notes</MenuItem>
                    <MenuItem  icon={trash} onClick={() => selectNotes(false)}>Trash</MenuItem>
                </Sidebar>
                { onNotes ? 
                    <Bottom>
                        <CreateNote createNote={createNote}/>
                        <Notes type={"notes"} notes={notes} softDelete={softDelete} colorChange={colorChange}/>
                    </Bottom> :
                    <Bottom>
                        <Notes type={"trash"} notes={deletedNotes} hardDelete={hardDelete} recover={recover} colorChange={colorChange}/>
                    </Bottom>
                }
            </Main>
        </div>
    );
};

export default Home;
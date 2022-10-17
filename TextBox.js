import React, { useContext } from 'react'

import { ContextNotes } from '../ContextFolder/Context';
import EditCard from './EditCard';
import { AiFillDelete, AiFillPushpin, AiFillEdit } from "react-icons/ai";
import Alert from './Alert';




const TextBox = () => {



    const { items, setItems, FakeNotes, editNotes, toggleSubmit, pinNotes, pagesVisited, notesPerPage, alert, } = useContext(ContextNotes)

    //Delete function

    const deleteNotes = (id) => {
        // console.log('id:', id);
        const updatedNotes = items.filter((el, i) => {

            return id !== el.id;
        });
        setItems(updatedNotes)
    }




    return (
        <>
            {alert &&
                <Alert />
            }
            {items.slice(pagesVisited, pagesVisited + notesPerPage).map((notes) => {

                return <div className='Card-notes' key={notes.id} >

                    <h2 className='Font'>{notes.title}</h2>

                    <br />

                    <div style={{ height: "50%" }} >

                        <p className='Font2' >{notes.body}</p>

                    </div>

                    <div className="icon-box">

                        <AiFillDelete size="1.3em" onClick={() => deleteNotes(notes.id)} style={{ cursor: "pointer" }} />

                        <br />

                        <AiFillEdit onClick={() => editNotes(notes.id)} size="1.3em" style={{ cursor: "pointer" }} />

                        <br />

                        <AiFillPushpin onClick={() => pinNotes(notes)} size="1.3em" style={{ cursor: "pointer" }} />

                    </div>

                </div>
            })}



            {toggleSubmit &&

                <EditCard FakeNotes={FakeNotes} />

            }
        </>
    )
}

export default TextBox

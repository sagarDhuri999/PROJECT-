import React, { useContext, useState } from 'react'
import { ContextNotes } from '../ContextFolder/Context'
import TextBox from './TextBox'
import { AiFillFolderAdd, AiOutlineSend } from "react-icons/ai";


const Card = () => {
    const { notes, setNotes, submit } = useContext(ContextNotes)

    const [show, setShow] = useState(false)


    const handleChange = (e) => {

        setNotes({
            ...notes,
            [e.target.name]: e.target.value,

        })


    }


    return (
        <>
            <div className='CardBox'>

                {!show &&

                    <div className="Add-folder">

                        <AiFillFolderAdd onClick={() => setShow(true)} size="16rem" style={{ cursor: "pointer" }} />

                    </div>
                }

                {show &&
                    <>

                        <h4 className='Font orange' >Title</h4>

                        <input type="text" name='title' onChange={handleChange} value={notes.title} />

                        <br />

                        <div>

                            <textarea name="body" id="" cols="44" rows="12" onChange={handleChange} value={notes.body} />

                        </div>

                        <div className='Card-btn' >

                            <AiOutlineSend onClick={submit} style={{ cursor: "pointer" }} />

                        </div>


                    </>

                }

            </div>

            {/* Text-Box */}

            <TextBox />
        </>
    )
}

export default Card

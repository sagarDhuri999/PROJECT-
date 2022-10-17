import { useContext, useState } from "react";
import { ContextNotes } from "../ContextFolder/Context";
import { AiFillCloseCircle, AiOutlineSend } from "react-icons/ai";


const EditCard = ({ FakeNotes, }) => {

  const [editN, setN] = useState({ title: FakeNotes.title, body: FakeNotes.body, id: FakeNotes.id })

  const { setToggleSubmit, tryNotes, items, setItems } = useContext(ContextNotes)


  const handleChange = (e) => {

    setN({
      ...editN,
      [e.target.name]: e.target.value,
      // id: new Date().getTime().toString()  //To create new id's,use for edit Data & del Data

    })


  }

  const submitNote = () => {

    setItems(
      items.map((elem) => {
        if (elem.id === tryNotes) {
          return { ...editN }
        } else {
          return elem;
        }

      })
    )

    setToggleSubmit(false)

  }


  return (
    <div className='Edit-box' >


      <div className='CardBox black'>

        <div className='close-editBox' >

          <AiFillCloseCircle onClick={() => setToggleSubmit(false)} size="2rem" style={{ cursor: "pointer" }} />

        </div>

        <h3 className="Font orange" >Title</h3>

        <input type="text" name='title' value={editN.title} onChange={handleChange} />

        <br />

        <div>
          <textarea name="body" id="" cols="44" rows="12" value={editN.body} onChange={handleChange}  ></textarea>

        </div>

        <div className="Card-btn" >

          <AiOutlineSend onClick={submitNote} style={{ cursor: "pointer" }} />

        </div>

      </div>


    </div>
  )
}

export default EditCard



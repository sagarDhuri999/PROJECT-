import React, { createContext, useEffect, useState } from 'react'
export const ContextNotes = createContext()

//TO GET  DATA 
const getLocalItems = () => {
    let list = localStorage.getItem("notes-app")
    if (list) {
        return JSON.parse(localStorage.getItem("notes-app"))
    } else {
        return []
    }
}

function Context({ children }) {

    // ALL USE STATE 

    const [notes, setNotes] = useState({ title: "", body: "" })
    const [items, setItems] = useState(getLocalItems())
    const [FakeNotes, setFakeNotes] = useState()
    const [toggleSubmit, setToggleSubmit] = useState(false)
    const [tryNotes, setTryNotes] = useState(null)
    const [showPins, setShowPins] = useState(false)
    const [allPins, setAllPins] = useState(null)
    const [alert, setAlert] = useState(false)



    //TO SET ALL DATA 

    useEffect(() => {
        localStorage.setItem("notes-app", JSON.stringify(items))

    }, [items])

    //EDIT LOGIC
    const editNotes = (notes) => {


        setToggleSubmit(true)
        const fakeEdit = items.find((el) => {
            return notes === el.id

        })
        setFakeNotes(fakeEdit)
        setTryNotes(notes)



    }
    //PIN LOGIC

    const pinNotes = (id) => {

        console.log('pin:', id);
        const pins = items.filter((el) => id.id === el.id)
        setAllPins([pins])
        setShowPins(true)


    }

    //ReactPaginate LOGIC

    const [pageNumber, setPageNumber] = useState(0)
    const notesPerPage = 5
    const pagesVisited = pageNumber * notesPerPage


    const pageCount = Math.ceil(items.length / notesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    //NOTES ADD IN LOCAL STORAGE
    const submit = () => {

        if (notes.title === "" || notes.body === "") {


            setAlert(true)

            setTimeout(() => {
                setAlert(false)
            }, 3000);


        }//FOR  PINS NOT work code
        else if (notes.title === "" && notes.body === "" && showPins) {
            console.log('ALLPINS', allPins);
            setItems([].splice(allPins, 1))
            setItems([].unshift(allPins))
            console.log('its work');


        }
        else {
            const allNotes = { id: new Date().getTime().toString(), ...notes }

            setItems([allNotes, ...items])

            console.log('items:', items)
            setNotes({ title: "", body: "" })

        }

    }


    const allData = {
        notes, setNotes, items, setItems, getLocalItems, submit, FakeNotes, setFakeNotes, editNotes, toggleSubmit, setToggleSubmit, tryNotes, pinNotes, pagesVisited, notesPerPage, changePage, pageCount, alert,

    }



    return (
        <ContextNotes.Provider value={{ ...allData }}>

            {children}

        </ContextNotes.Provider>
    )
}

export default Context

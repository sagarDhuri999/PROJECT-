
import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import { ContextNotes } from './ContextFolder/Context';

/****************** All Notes ************/
// All css is written  in App.css
// ALL main function logic is written in Context
// Use Local Storage for Data store cos its small app
// I have keep pin function code(that not work)

/****************** Packages Use ************/
// 1.react-paginate
// 2.react-icons


function App() {

  const { pageCount, changePage, items } = useContext(ContextNotes)

  return (
    <div className='App-Container' >
      <Header />
      <div className='Card-parent'>
        <Card />

      </div>
      {/* to do */}

      {items.length === 6 &&

        <ReactPaginate
          prevPageRel={"Pre"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={changePage}
          // For styling
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      }

    </div>
  );
}

export default App;

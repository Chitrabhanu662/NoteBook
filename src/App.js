import React, { useState } from 'react';
import CreateNote from './Component/CreateNote';
import Header from './Component/Header';
import Note from './Component/Note';
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) =>{
    setAddItem((prevData)=>{
      return[...prevData, note];
    });
    console.log(note);
  };


const onDelete = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((currData, index) => {
                return index !== id;
            });
        });
    };


  return <>
   <Header/>
   <CreateNote passNote={addNote}/>
  { addItem.map((val,index) => {
    return <Note key={index}
           id ={index}
           title={val.title}
           content={val.content}
           deleteItem={onDelete}
           />
   })}
  </>;
}
export default App;
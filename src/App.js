import React from 'react'
import "./App.css"
import { useState } from 'react'
import Todo from "./Todo"

export default function App() {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems =() =>{
    setItems((oldItems) => {
      return [...oldItems,InputList];
    })
    setInputList("")
  }

  const deleteItems = (id) =>{
    setItems((oldItems) =>{
      return oldItems.filter((arrElem,index) =>{
        return index !== id;
      })
    })
}
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a Items" value={InputList} onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button><br />
          <ol>
            {/* <li>{InputList}</li> */}
            {Items.map((itemval,index)=> { return <Todo key={index} id={index}text={itemval} onSelect ={deleteItems} /> })}
          </ol>
        </div>
      </div>
    </>
  )
}

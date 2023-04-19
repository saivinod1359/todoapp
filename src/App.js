import React, { useState } from 'react';

import CreateTaskComponent from './molecules/createTask/createTaskComponent';
import HeadingComponent from './atoms/heading/headingComponent';
import ListMolecule from './molecules/listMolecule/listMolecule';

import './App.css'; //file

// import CreateSubTaskComponent from './molecules/createSubTask/createSubTaskComponent';

function App() {
  const [errorMessage, setErrorMessage] = useState({
    error_1: "This is Error Message 1",
    error_2: "This is Error Message 2",
  });

  localStorage.setItem("list", JSON.stringify([
    "Todo List Task 1",
    "Todo List Task 2",
    "Todo List Task 3",
    "Todo List Task 4",
  ]));


  var [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("list")));


  const deleteTask = (event, index) => {
    let todoListItems = todoList;
    todoListItems.splice(index, 1);
    setTodoList([...todoListItems]);
  }

  const updateTodoList = (list) => {
    let todoListItems = JSON.parse(localStorage.getItem("list"));
    console.log('todoListItems: ',todoListItems)
    todoListItems.push(list)
    // console.log(JSON.parse((localStorage.getItem("list"));
    setTodoList([...todoListItems]);
  }

  return (
    <div className="container">
      {
        errorMessage
          && errorMessage.error_1
          && <p className="error"> { errorMessage.error_1 } </p>
      }
      <HeadingComponent msg="Todo Application" />
      <CreateTaskComponent updateTodoList={updateTodoList} />
      {
        (todoList && todoList.length === 0)
          ? <p className='error'>Your Todo List is Empty</p>
          : todoList && todoList.map((list, index) => {
            return <div key={index}>
              <ListMolecule info={list} deleteTask={deleteTask} />
            </div>
          })
      }

    </div>
  );
}

export default App;

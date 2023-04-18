import React, { useState } from 'react';

import CreateTaskComponent from './molecules/createTask/createTaskComponent';
import HeadingComponent from './atoms/heading/headingComponent';
import ListMolecule from './molecules/listMolecule/listMolecule';

import './App.css'; //file

// import CreateSubTaskComponent from './molecules/createSubTask/createSubTaskComponent';

function App() {

  var [todoList, setTodoList] = useState([
    "Todo List Task 1",
    "Todo List Task 2",
    "Todo List Task 3",
    "Todo List Task 4",
  ]);

  const deleteTask = (event, index) => {
    console.log('event: ', event)
    let todoListItems = todoList;
    todoListItems.splice(index, 1);
    setTodoList([...todoListItems]);
  }

  const updateTodoList = (list) => {
    let todoListItems = todoList;
    todoListItems.push(list)
    setTodoList([...todoListItems]);
  }

  return (
    <div className="container">
      <HeadingComponent msg="Todo Application" />
      <CreateTaskComponent updateTodoList={updateTodoList} />
      {
        (todoList && todoList.length === 0)
          ? <p className='error'>Your Todo List is Empty</p>
          : todoList && todoList.map((list, index) => {
            return <ListMolecule info={list} key={index} deleteTask={deleteTask}/>
          })
      }

    </div>
  );
}

export default App;

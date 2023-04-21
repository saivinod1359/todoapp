import React, { useState } from 'react';

import CreateTaskComponent from './molecules/createTask/createTaskComponent';
import HeadingComponent from './atoms/heading/headingComponent';
import ListMolecule from './molecules/listMolecule/listMolecule';

import { axiosReq } from './axios';

import './App.css'; //file


// import CreateSubTaskComponent from './molecules/createSubTask/createSubTaskComponent';

function App() {
  localStorage.removeItem("list");
  const [todoList, setTodoList] = useState([]);
/**
 * fetch call APIs, GET and POST
 * Start
 */
/*
//fetch with dummy respone
  fetch("./responses/response_task.json")
  .then((response) => response.json())
  .then((response) => {
    console.log('Response: ', response);
    localStorage.setItem("list", JSON.stringify(response.tasks));
   // setTodoList(response.tasks)
  }).catch((err) => {
    //catch method to catch the error
  })
//fetch with RestAPI https://dummy.restapiexample.com/
  fetch(`${uri}/create`, {
    method: "POST", //GET, PUT, DELETE
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ "name": "Sai", "salary": "123", "age": "30" })
  })
    .then((response) => response.json())
    .then((response) => {
      console.log('Response: ', response);
      // localStorage.setItem("list", JSON.stringify(response.tasks));
      // setTodoList(response.tasks)
    })
*/
//Ends
/** 
 * Axios
*/
/*
  axios.get("./responses/response_task.json").then((response) => console.log(response.data))
  axiosReq.get(`/employees`)
    .then((response) => console.log(response.data))
    .catch((err) => console.log("err: ", err.code)); */
  axiosReq.put(`/update/16`, {
    body: { "name":"test","salary":"123","age":"23", "id":"16"}
  })
    .then((response) => console.log(response.data))
    .catch((err) => console.log("err: ", err));


  const [errorMessage, setErrorMessage] = useState({
    error_1: "This is Error Message 1",
    error_2: "This is Error Message 2",
  });


  const deleteTask = (event, index) => {
    let todoListItems = todoList;
    todoListItems.splice(index, 1);
    setTodoList([...todoListItems]);
    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(todoListItems));

  }

  const updateTodoList = (list) => {
    let todoListItems = JSON.parse(localStorage.getItem("list"));
    console.log('todoListItems: ', todoListItems)
    todoListItems.push(list)
    // console.log(JSON.parse((localStorage.getItem("list"));
    setTodoList([...todoListItems]);
  }

  return (
    <div className="container">
      {/* {
        errorMessage
          && errorMessage.error_1
          && <p className="error"> { errorMessage.error_1 } </p>
      }
      <HeadingComponent msg="Todo Application" />
      <CreateTaskComponent updateTodoList={updateTodoList} />
      {
        (todoList && todoList.length === 0)
          ? <p className='error'>Your Todo List is Empty</p>
          : todoList && todoList.length && todoList.map((list, index) => {
            return <div key={index}>
              <ListMolecule info={list} deleteTask={deleteTask} />
            </div>
          })
      } */}

    </div>
  );
}

export default App;

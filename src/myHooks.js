/**
 * 
 * @returns Functional Component
 * @params Props
 */
import React, { useEffect, useState } from 'react';

const MyHooks = (props) => {
    const [username, setUserName] = useState('Sai');
    const [count, setCount] = useState(0);


    /**
     * Component Did Mount
     * ajax calls when you want load the data from Server Rest API.
     */
    useEffect(() => {
        console.log("Hello this is Component Did Mount!");
    }, []);

    /**
     * Component will received props
     */
    useEffect(() => {
        console.log('ComponentWillReceiveProps')
    })

     /**
     * Component should update, component Will Update.
     */
    useEffect(() => {
        console.log('ComponentUpdate/ComponentShouldUpdate')
    }, [count, username])

    // /**
    //  * Component UnMounting.
    //  */
    useEffect(() => {
        return (() => {
            console.log('This is Component UnMounting');
        })
    })

    const updateStateMethod = () => {
        console.log("State Updated!");
        setUserName(username === "Sai" ? "Rajesh" : username === "Rajesh" ?  "Sai" : "Will Smith");
    }

    const updateCount = () => {
        console.log("Count State Updated!");
        let c = count+1;
        setCount(c);
    }

    return <>
        <h1>Hello Hooks {username} {count}</h1>
        <button onClick={updateStateMethod}> Update State </button>
        <button onClick={updateCount}> Update Count </button>
    </>
}

export default MyHooks;
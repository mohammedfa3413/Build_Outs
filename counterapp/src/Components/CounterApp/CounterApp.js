import React from 'react'
import styles from './CounterApp.module.css'
import  {useState} from "react"

function CounterApp() {
    const [count ,setcount]= useState(0)

    const increment =(e)=>{
        // console.log(e)
        setcount((pre)=>pre + 1)
    }

    const decrement =(e)=>{
        // console.log(e)
        setcount((pre)=>pre - 1)
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterApp

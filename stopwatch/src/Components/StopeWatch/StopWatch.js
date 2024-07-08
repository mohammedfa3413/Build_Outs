import React from 'react'
import useState from "react"

function StopWatch() {
   const [isActivated,setisActivated] = useState(false)

  const formate = (sec) => {
    let timer = Math.floor(sec/60)
    let seconds =  sec%60
    return `${timer}:${seconds<10?"0":""}`
  }


  return (
    <>
    <p>Time:{formate()}</p>
    <button>{isActivated? "Stop" : "Start"}</button>
    <button>Reset</button>
    </>
  )
}

export default StopWatch

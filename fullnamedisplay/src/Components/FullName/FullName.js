import React, { useState } from 'react'
import styles from "./FullName.module.css"
function FullName() {
  const [firstname,setfirstname] = useState("");
  const [lastname,setlstname] = useState("");
  const [fullName, setfullname] = useState("");
  const [message, setMessage] = useState("");
  const [submit,setsubmit] = useState(false);



  const handelSubmit = (e)=>{
    e.preventDefault();


    if(!firstname || !lastname){
        setMessage("Please Enter The Fields")  
    }else{
      setfullname(`${firstname} ${lastname}`)
      setMessage("")
      setsubmit(true)
    }
      
  }

  const handelfirstchange = (e)=>{
    // console.log(e.target.value);
    setfirstname(e.target.value);
  }

  const handellastchange = (e) =>{
    setlstname(e.target.value);
  }

  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Full Name Display</h1>
        <form className={styles.form} onClick={handelSubmit}>
          <label>
            First Name : 
            <input value={firstname} onChange={handelfirstchange} title={firstname === "" ? 'Please fill out this field' : ""}/>
          </label>
          <label>
            Last Name : 
            <input value={lastname} onChange={handellastchange} title={lastname === "" ? 'Please fill out this field' : ""}/>
          </label>
         <button className={styles.button}>Submit</button>
        </form>
        {message && <p>{message}</p>} 
        {submit && <p>Full Name:{fullName}</p>}
    </div>
  )
}

export default FullName



















import React from 'react'
import styles from './Cards.module.css'
import { useEffect, useState } from 'react';


function Cards() {
  const [data ,setData] = useState([]);

  const manage = async()=>{
    try {
      const res = await fetch("https://restcountries.com/v3.1/all")
      const display = await res.json();
      setData(display);
    } catch (error) {
      console.log("Error fetching data:",error);
    }
  }

  useEffect(()=>{
    manage()
  },[])


  return (
    <div className={styles.container}> 
 
   
          {data.map((items) => (
                  <div className={styles.card}>
                          <img src={items.flags.png} alt='flags' width={100} height={100} />
                          <p className={styles.p}>{items.name.common}</p>
                  </div> 
          ))}
        
    </div>      
   
  )
}

export default Cards

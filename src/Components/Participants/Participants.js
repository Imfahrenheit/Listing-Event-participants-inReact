import React from 'react';
import styles from './Participants.css'

const participants=  (props) => {
  return (
    
    <div className = {styles.Participants}>

      <div className = {styles.Child}> {props.name}   </div>
      <div className=  {styles.Child}> {props.email}  </div>
      <div className=  {styles.Child}> {props.phone}  </div>
      <div className= {styles.Child} >
      
      <button
      className={styles.Del}
        id={props.i}
        onClick={props.clicked}
      >del </button>
      <button
          className={styles.Edit}
        id={props.i}
          onClick={props.edit}
         

        
      > edit</button>
      </div>

          
    </div>
    
  )
}
export default participants;
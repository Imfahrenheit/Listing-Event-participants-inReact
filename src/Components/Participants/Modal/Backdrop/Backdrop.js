import React from 'react';
import styles from './Backdrop.css'

const backdrop = (props) => (
    
    props.show ? <div className={styles.BackDrop} 
    onClick={props.click}> </div> : null
  )

     

export default backdrop;
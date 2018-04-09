import React from 'react';
import styles from './Backdrop.css'

const backdrop = (props) => (
    
            <div className={styles.BackDrop} 
            onClick={props.click}> </div> 
          )

     

export default backdrop;
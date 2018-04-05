import React from 'react';
import styles from './EditInput.css'

const editInput = (props) => (
    <React.Fragment> 
        
    <div className= {styles.Edit} > 
            
    
    
                <div className={styles.Child}> 
                <input value={props.inputValue['name']} 
                    type={'text'} onChange={props.change} 
                    edit={props.editData}  
                    name={'name'} 
                    placeholder={'Name'} /></div>
                <div className={styles.Child}>
                <input value={props.inputValue['email']} 
                    type={'email'} 
                    onChange={props.change} 
                    edit={props.editData}  
                    name={'email'} 
                placeholder={'Email'} 
                
                /></div>
                <div className={styles.Child}>
                <input value={props.inputValue['phone']} 
                    type={'number'}
                    onChange={props.change}
                    edit={props.editData}  
                    name={'phone'} 
                    placeholder={'Phone Number'} /> </div>
                <div className={styles.Child}> 
                <button
                    className={styles.Del}
                    id={props.i}
                    onClick={props.update}>

                    Save </button>
            
                    </div>

    
    </div> 
    </React.Fragment>
)



export default editInput;
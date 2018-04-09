import React from 'react';
import styles from './Inputlist.css';





 const Inputs= (props) => {

   

  return (



    <React.Fragment>
      <div className={styles.Inputlist}>
      
        <input value={props.values['name']} 
      type={'text'} className={styles.Inputelement} 
      onChange={props.change} name={'name'} 
      placeholder={'Full Name'}
     
      />
      
     
        <input  value={props.values['email']} 
      type={'email'} className={styles.Inputelement} 
      onChange={props.change} name={'email'} 
      placeholder={'Email'} 
      
       />
        
      
        <input  value={props.values['phone']} 
      type={'text'} className={styles.Inputelement} 
      onChange={props.change} name={'phone'} 
      placeholder={'Phone Number'} 
      />
      
      
      <button
      onClick={props.clicked}
      className={styles.Button}
      
      > add</button>
      </div>
          

      <div className={styles.Participants}>
          
            <div className={styles.Child}> 
          <span className={styles.Icon}
          onClick={ props.personsSort}>
            <i className="fas fa-arrows-alt-v" />
          </span>
            Name   </div>
            <div className={styles.Child}> Email  </div>
            <div className={styles.Child}> Phone Number  </div>
            <div className={styles.Child} > Controls</div>


      </div>
    </React.Fragment>
  )
}
export default Inputs;
import React from 'react';
import styles from './Modal.css';
import Backdrop from './Backdrop/Backdrop';

const modal = props => {
  return props.show ?(    <React.Fragment>

                <Backdrop  click={props.clicked}
                />
    <div className={props.show ? [styles.Modal, 'animated', 'pulse'].join(' '):styles.Modal}>
                        
                {props.children}
      <span className={styles.Exit}
        onClick={props.clicked }><i className="fas fa-times-circle"></i> </span>
                  </div>

                </React.Fragment>
  ):null;
}
export default modal;

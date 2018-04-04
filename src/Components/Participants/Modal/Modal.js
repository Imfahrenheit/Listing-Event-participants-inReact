import React from 'react';
import styles from './Modal.css';
import Backdrop from './Backdrop/Backdrop';

const modal = props => {
  return props.show ?(    <React.Fragment>

                <Backdrop show={props.show} click={props.clicked}
                />
    <div className={props.show ? [styles.Modal, 'animated', 'pulse'].join(' '):styles.Modal}>
                        
                {props.children}
                  </div>

                </React.Fragment>
  ):null;
}
export default modal;

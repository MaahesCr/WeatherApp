import React from "react";

const close_btn = ({active, setActive}) => {
    return (
        <button className={active ? 'close-nav-btn' : 'close-nav-btn-hide'} onClick = {() => setActive(false)}>
          <img src="./image/animated/icons8-close-30.svg" alt="close-btn" />  
        </button> 
    );
};

export default close_btn;
import React from "react";

let window_Load = window.onload;

const loadScreen = ({load, setLoad}) => {
    return (
    <div className={load ? 'loading-screen' : 'loading-is-over'}  window_Load = {() => setLoad(true)}>

    </div>
    );
};

export default loadScreen;

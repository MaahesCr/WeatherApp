import React from "react";

const menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick = {() => setActive(false)}>
            <div className="blur"/>
            <div className="menu__content" onClick={e => e.stopPropagation()}> 
                {/*<div className="menu__header">{header}</div>*/}
                <ul>
                    {items.map(item =>
                        <li>
                            <h5 className="menu__item_desc">{item.description}</h5>
                            <h4 className="menu__item_value">{item.value}</h4>
                        </li>
                    )}
                </ul>
                <h5 className="signature">Directed and designed by Lev Bondarenko</h5>
            </div>
        </div>
    );
};

export default menu;
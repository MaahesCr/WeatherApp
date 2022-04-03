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
                            {/*<a href={item.href}>{item.value}</a>
                            <span className="material-icons">{item.icon}</span>*/}
                            <h5 className="menu__item_value">{item.description}</h5>
                            <h4 className="menu__item_desc">{item.value}</h4>
                        </li>
                    )}
                </ul>
                <h5 className="signature">Directed and designed by Lev Bondarenko</h5>
            </div>
        </div>
    );
};

export default menu;
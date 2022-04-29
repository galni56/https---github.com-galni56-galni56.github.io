import React from "react";

import Environment from "./Environment";
import collapsingList from '../hoc/collapsingList';

const EnvironmentItem = (props) => {
    
    const { item, key, onClick, isShow } = props;

    return (
        <div className={item.__typename} key={item.code + key}>
            <p onClick={onClick} className={item.__typename} >{ item.name }</p>
            { isShow && item ? <Environment data={item}/> : null }
        </div>
    )
}


export default collapsingList(EnvironmentItem);
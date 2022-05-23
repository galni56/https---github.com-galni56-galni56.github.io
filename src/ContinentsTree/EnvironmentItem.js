import React from "react";

import { Context } from '../ContinentsTree/list-context';
import Environment from "./Environment";
import collapsingList from '../hoc/collapsingList';

const EnvironmentItem = (props) => {
    
    const { item, key, onClick, isShow } = props;

    const contextList = React.useContext(Context);

    console.log('ASD' + contextList);

    return (
        <div className={item.__typename} key={item.code + key}>
            <p onClick={() => onClick(item.__typename, key)} className={item.__typename} >{ item.name }</p>
            { isShow && item ? <Environment data={item}/> : null }
        </div>
    )
}


export default collapsingList(EnvironmentItem);
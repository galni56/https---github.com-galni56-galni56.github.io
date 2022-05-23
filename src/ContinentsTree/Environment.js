import React from 'react';

import EnvironmentItem from './EnvironmentItem';
import { Context } from './list-context';

const Environment = (props) => {
    
    const { data } = props;
    let list = data.continents || data.countries || data.languages || []; 

    console.log(list.length + " Environment")

    return (
        <Context.Provider value={list.length}> {
            list.map((item, i) => {
                return (
                        <EnvironmentItem item={item} key={i} listLength={list.length} />
                )
            })
        }
        </Context.Provider>

    )
}


export default Environment;
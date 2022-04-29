import React from 'react';

import EnvironmentItem from './EnvironmentItem';

const Environment = (props) => {
    
    const { data } = props;
    let list = data.continents || data.countries || data.languages || []; 
    
    return (
        list.map((item, i) => {
            return (
                <EnvironmentItem item={item} key={i} />
            )
        })
    )
}


export default Environment;
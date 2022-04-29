import React from 'react';
import collapsingList from '../hoc/collapsingList';

const Environment = (props) => {
    
    const { data, onClick, isShow }  = props;
    let world = data.continents || data.countries || data.languages || [] ; 
    
    console.log(world)
    
    return (
        world.map((item, i) => {
            return (
                <div className={item.__typename} key={item.code + i}>
                    <p onClick={onClick} className={item.__typename} >{ item.name }</p>
                    { isShow ? <Environment data={item}/> : null }
                </div>
            )
        })
    )
}


export default collapsingList(Environment);
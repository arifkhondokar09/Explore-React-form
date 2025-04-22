import React from 'react';
import Special from './Special';
import Friend from '../Friend/Friend';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
           {
            name=== "Sorna" && <Special asset={asset}></Special>
           }
           {
            name=== "Runa" && <Friend></Friend>
           }
        </div>
    );
};

export default Cousin;
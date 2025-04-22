import React, { useContext } from 'react';
import {  myContext2 } from '../FamilyTree/FamilyTree';
const Friend = () => {
    const  [money,setMoney]=useContext(myContext2);
    return (
        <div>
            <h3>Friend</h3>
            <p>money: {money}</p>
            <button onClick={()=> setMoney(money+1000)}>   Add Money </button>
        </div>
    );
};

export default Friend;
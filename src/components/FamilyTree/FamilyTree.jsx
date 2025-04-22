
import Grandpa from './Grandpa';
import "./FamilyTree.css"
import { createContext, useState } from 'react';
 
export const myContext= createContext("");
export const myContext2= createContext(0);



const FamilyTree = () => {
    const [money,setMoney]=useState(0);
      const asset = "diamond";
      const newAsset= "Gold";
      const laptops = "black"
      const products={
        laptops,
        newAsset
      }
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <p>Total Money : {money}</p>
       <myContext2.Provider value={[money,setMoney]}>
       <myContext.Provider value={products}>
        <Grandpa asset={asset} > </Grandpa>
        </myContext.Provider>
       </myContext2.Provider>
        </div>
    );
};

export default FamilyTree;
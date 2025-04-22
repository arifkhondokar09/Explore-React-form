import { useContext } from "react";
import { myContext } from "./FamilyTree";



 const Special = ({asset}) => {
 
    const products=useContext(myContext);
    // console.log(products);
    const {laptops,newAsset}=products;
    return (
        <div>
            <h3>Special</h3>
            <h5>asset: {asset}</h5>
           <h5>Laptops : {laptops} </h5>
           <h5>newAsset : {newAsset}</h5>
        </div>
    );
};

export default Special;
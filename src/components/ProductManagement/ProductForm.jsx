import React, { useState } from 'react';

const ProductForm = ({ handleAddProducts }) => {
    const [error, setError] = useState('');

    const handleProductSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        if (name.length == 0) {
            setError("please provide a name");

        }
        else if (price.length === 0) {
            setError(" please provide a price");
            return;
        }
        else if (price < 0) {
            setError('price should not be negative number');
            return;
        }

        else if (quantity <= 0) {
            setError("qunatity expalin please");
            return;
        }
        else {
            setError("")
        }
        //  console.log(name, price,quantity);
        const newProduct = {
            name,
            price,
            quantity
        }


        //  console.log(newProduct);
        handleAddProducts(newProduct);


    }
    return (
        <div>
            <h3>Add A Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='product name' />
                <br />
                <input type="text" name="price" placeholder='product price' />
                <br />
                <input type="text" name="quantity" placeholder='Product qunatity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: "red" }}>{error}</p>

        </div>
    );
};

export default ProductForm;
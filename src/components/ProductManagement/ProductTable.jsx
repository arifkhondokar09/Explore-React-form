import React from 'react';

const ProductTable = ({ products }) => {
    console.log(products)
    return (
        <div>
            <h3>Total products : {products.length}</h3>
            <table>
                <thead>
                    <tr>
                    <th>NO</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qunatity</th>
                    </tr>
                </thead>
                <tbody>
                {
                products.map((product, index) => <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>

                </tr>)
            }
                </tbody>
            </table>
           
        </div>
    );
};

export default ProductTable;
import React from 'react';
import Myself from './Myself';
import Sister from './Sister';

const Father = ({asset}) => {
    return (
        <div>
            <h3>Father</h3>
           <section className='flex'>
           <Myself asset={asset}></Myself>
           <Sister></Sister>
           </section>
        </div>
    );
};

export default Father;

import Cousin from './Cousin';


const Aunt = ({asset}) => {
    
   
    return (
        <div>
            
            <h3>Aunt</h3>
           
            <section className='flex'>
        <Cousin asset={asset} name="Sorna"></Cousin>
            <Cousin name="Runa" ></Cousin>
            
            
            </section>
        </div>
    );
};

export default Aunt;
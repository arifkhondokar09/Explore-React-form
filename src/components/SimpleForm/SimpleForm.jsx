import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(e.target.name.value,
         e.target.email.value)
     
      }
    return (
        <div>
              <form onSubmit={handleSubmit} action="">
      <input type="text" name='name' placeholder='Your Name' />
      <br />
  <input type="email" name="email" placeholder='Your EMail' id="" />
      <br />
      <input type="submit"  value="Submit" />
     </form>
        </div>
    );
};

export default SimpleForm;
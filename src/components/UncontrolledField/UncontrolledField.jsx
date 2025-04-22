import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef= useRef('');
    const passwordRef= useRef("")


    const handleSubmit=(e)=> {

       e.preventDefault()

       const email= emailRef.current.value;
       const password = passwordRef.current.value;
       console.log(email, password)
      

    }

    return (
        <div>
       
        
            <form onSubmit={handleSubmit} >
                <input type="email" ref={emailRef} name="email" id="email" placeholder='email' />
                <br />
                <input type="password" ref={passwordRef} name="password" placeholder='password' id="password" />
                <br /> <input type="submit" value="Submit" />            </form>
        </div>
    );
};

export default UncontrolledField;
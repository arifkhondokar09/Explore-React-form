import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
     
        console.log(name, password, email)



        {
            password.length < 6 ? setError("pasword must be 6 characters") : setError("")
        }


    }
    const handleNameOnChange = (e) => {
        setName(e.target.value)
    }


    const handleEmailOnChange = (e) => {
   setEmail (e.target.value)
    }
    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
        // if(password.length< 6 ){
        //     setError("password should be 6 digits or longer")
        // }
        // else{
        //     setError(" ")
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="name" defaultValue={name} onChange={handleNameOnChange} id="name" placeholder='Your Name' />
                <br />
                <input type="email" name="email" placeholder='Your Email' id=""  onChange={handleEmailOnChange} defaultValue={email} />
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange} placeholder="Type Password" id=""  />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: "red" }}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;
import React from 'react';
import UseInputField from '../../hooks/UseInputField';

const HookForm = () => {
    const [name, nameOnChange]= UseInputField("");
    const [email, emailOnChange]= UseInputField("");
    const [password, passwordOnChange]= UseInputField("");

    const handleOnSubmit = (e)=> {
        e.preventDefault()
        console.log("submit",name,email, password);

    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" defaultValue={name} placeholder='Your Name' onChange={nameOnChange} />
                <br />
                <input type="email" name="email" onChange={emailOnChange} placeholder='Yourr Email' />
                <br />
                <input type="password" name="password" onChange={passwordOnChange}  placeholder='Your Password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default HookForm;
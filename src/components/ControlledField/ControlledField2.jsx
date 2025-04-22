import { useState } from "react";


const ControlledField2 = () => {

    const [password, setPassword]= useState("");
    const [error, setError]= useState("")


    function handleSubmit(e){
        e.preventDefault()
        
    if (password.length< 6 ){
        setError(" wrong password")

    }
    else{
 setError("RIGHT")
    }
    }


    function handlePasswordOnChange(e){
        setPassword(e.target.value)
        if(password.length <6 ) {
            setError(" password should be 6 characters or more")
        }
        else{
            setError("")
        }
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder=' EMAIL' id="email1"  required/>
                <br />
                <input type="password" name="password" id="password1" onChange={handlePasswordOnChange} placeholder='PASSWORD' />
                <br />
                <input type="submit" value="Submit" />

                
            </form>
            <p>{error}</p>
            
        </div>
    );
};

export default ControlledField2;
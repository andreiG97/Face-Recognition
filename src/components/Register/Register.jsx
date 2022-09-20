import {React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register(props) {
    const {loadUserHandler} = props;
    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [name, setName] = useState('');
    let [register, setRegister] = useState(false);

    function emailHandler(event){
        email = setEmail(event.target.value);
  
    }

    
    function passwordHandler(event){
        password = setPassword(event.target.value);
        
    }

        
    function nameHandler(event){
        name = setName(event.target.value);
        
    }



    let onSubmitHandler = () =>{
        fetch("http://localhost:3000/register", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data){
                loadUserHandler(data);
                setRegister(register = true);
                navigate('/FaceRecognition', {replace: true})
            }
        })
    }

    return (
        <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="user" >Username</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user" id="user" onChange={nameHandler} />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address" >Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" onChange={emailHandler}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password" >Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={passwordHandler}/>
                        </div>
                    </fieldset>
                    <div className="">
                        {
                            register 
                            ?
                            <Link to='/FaceRecognition'>
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" onClick={onSubmitHandler}/>
                            </Link>
                            :
                            <Link to='/register'>
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" onClick={onSubmitHandler}/>
                        </Link>
                        }
                    </div>
                    <div className="lh-copy mt3">
                        <Link to='/'>
                            <a href="#0" className="f6 link dim black db">Back</a>
                        </Link>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Register
import { useState, React } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn(props) {

    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [login, setLogin] = useState(false);

    function emailHandler(event){
        email = setEmail(event.target.value);
  
    }

    
    function passwordHandler(event){
        password = setPassword(event.target.value);
        
    }



    let onSubmitHandler = () =>{
        fetch("http://localhost:3000/signin", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.id){
                setLogin(login = true);
                props.loadUserHandler(data);
                navigate('/FaceRecognition', {replace: true})
            }
            console.log(login)
        })
    }
    return (
        <article className="br3 shadow-5 ba dark-gray b--black-10 mb4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input required className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" onChange={ emailHandler }/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input required className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={ passwordHandler } />
                        </div>
                    </fieldset>
                    <div className="">
                        
                        {

                        login ?
                                <Link to='/FaceRecognition'>
                                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={onSubmitHandler} />
                                </Link> 
                              :

                              <Link to='/'>
                                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={onSubmitHandler} />
                                </Link> 
                                
                        
                        }
                    </div>
                    <div className="lh-copy mt3">
                        <Link to='/Register'>
                            <a href="#0" className="f6 link dim black db">Sign up</a>
                        </Link>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default SignIn
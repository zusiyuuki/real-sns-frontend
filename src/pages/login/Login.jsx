import React from 'react';
import { useContext, useRef } from 'react';
import { loginCaall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import "./Login.css"
export default function Login() {
    const email =useRef();
    const password =useRef();
    const {user,dispatch}= useContext(AuthContext);

    const handleSubmit= (e) =>{
        e.preventDefault();
        //console.log(email.current.value);
       // console.log(password.current.value);
       loginCaall({
           email:email.current.value,
           password:password.current.value,
       },
       dispatch
       );
    };

    
    
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='LoginLogo'>Real SNS</h3>
                <span className='loginDesc'>本格的なSNSを自分の手で</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e)=>handleSubmit(e)}>
                    <p className='loginMsg'>ログインはこちらから</p>
                    <input 
                    type="email" 
                    className='loginInput' 
                    placeholder='Eメール' 
                    required
                    ref={email}
                    />
                    <input 
                    type="password" 
                    className='loginInput' 
                    placeholder='パスワード' 
                    required
                    minLength="6"
                    ref={password}
                    />
                    <button className='loginButton'>ログイン</button>
                    <span className='loginForgot'>パスワードを忘れた方へ</span>
                    <button className='loginRigesterButton'>アカウント作成</button>
                </form>
            </div>
        </div>
    </div>
  )
}

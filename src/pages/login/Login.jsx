import React from 'react'
import "./Login.css"
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='LoginLogo'>Real SNS</h3>
                <span className='loginDesc'>本格的なSNSを自分の手で</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <p className='loginMsg'>ログインはこちらから</p>
                    <input type="text" className='loginInput' placeholder='Eメール'/>
                    <input type="text" className='loginInput' placeholder='パスワード'/>
                    <button className='loginButton'>ログイン</button>
                    <span className='loginForgot'>パスワードを忘れた方へ</span>
                    <button className='loginRigesterButton'>アカウント作成</button>
                </div>
            </div>
        </div>
    </div>
  )
}

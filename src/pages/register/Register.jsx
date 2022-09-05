import React from 'react'
import "./Register.css"
export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='LoginLogo'>Real SNS</h3>
                <span className='loginDesc'>本格的なSNSを自分の手で</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <p className='loginMsg'>新規登録はこちら</p>
                    <input type="text" className='loginInput' placeholder='ユーザー名'/>
                    <input type="text" className='loginInput' placeholder='Eメール'/>
                    <input type="text" className='loginInput' placeholder='パスワード'/>
                    <input type="text" className='loginInput' placeholder='パスワード確認'/>
                    <button className='loginButton'>サインアップ</button>
                    <button className='loginRigesterButton'>ログイン</button>
                </div>
            </div>
        </div>
    </div>
  )
}

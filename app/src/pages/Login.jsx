import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header.jsx'
import InputBox from '../components/inputBox.jsx'
import Button from '../components/button.jsx'
import '../compiled-css/Login.css'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const loginBtnClick = () => {
        setEmailError('')
        setPasswordError('')

        if ('' === email) setEmailError('(!) Введено порожнє поле електронної пошти')
        if ('' === password) setPasswordError('(!) Введено порожнє поле пароля')

        /* Замінне наповнення для прикладу, тут мають бути виклики автентифікації */
        if (email && password) {
            // eslint-disable-next-line react/prop-types
            props.setLoggedIn(true)
            navigate('/home')
        }
    }

    return (
        <>
            <Header/>
            <div className='wrapper'>
                <div className='login-form-content'>
                    <div className='login-picture'>
                        <h2 className='decor'>
                        <span>
                            Платформа тестування кафедри ІПЗЕ
                        </span>
                        </h2>
                    </div>
                    <div className='form-background'>
                        <div className='form'>
                            <h5 className='body-text bold'>Увійти в обліковий запис</h5>
                            <div className='form-input'>
                                <InputBox
                                    id='email'
                                    type='email'
                                    value={email}
                                    placeholder='Електронна пошта'
                                    onChangeAction={setEmail}
                                    error={emailError}
                                    autoComplete='email'/>
                                <InputBox
                                    id='password'
                                    type='password'
                                    value={password}
                                    placeholder='Пароль'
                                    onChangeAction={setPassword}
                                    error={passwordError}
                                    autoComplete='current-password'/>
                                <a href='#' className='caption link'>Забули пароль?</a>
                                <Button
                                    value='Увійти'
                                    style='filled black'
                                    onClickAction={loginBtnClick}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
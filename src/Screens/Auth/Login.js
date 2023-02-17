import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./style.css";

import { AuthLayout } from '../../Components/Layout/AuthLayout';
import CustomButton from '../../Components/CustomButton';
import CustomInput from "../../Components/CustomInput"
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'


const AdminLogin = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({})

    useEffect(() => {
        document.title = 'FPUO | Login';
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }

    return (
        <>
            <AuthLayout authTitle='Login With Your Credentials!' authPara='If this your first time with the app, input your email and  password. We will register the account automatically for you!'>
                <form>
                    <CustomInput iconShow={faEnvelope} required id='userEmail' type='email' placeholder='Enter Your Email Address' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value })
                    }} />
                    <CustomInput required iconShow={faLock} id='pass' type='password' placeholder='Enter Password' labelClass='mainLabel' inputClass='mainInput' />
                    <div className="d-flex align-items-baseline justify-content-between mt-1">
                        <div className="checkBox">
                            <input type="checkbox" name="rememberMe" id="rememberMe" className='me-1' />
                            <label htmlFor="rememberMe" className='fw-semibold'>Remember Me</label>
                        </div>
                        <Link to={'/forget-password'} className='text-dark text-decoration-underline'>Forget Password?</Link>
                    </div>
                    <div className="mt-4 text-center">
                        <CustomButton variant='primaryButton' text='Get Started' onClick={handleClick} className="gradientBtn" />
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}


export default AdminLogin

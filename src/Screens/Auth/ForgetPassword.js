import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css";


import { AuthLayout } from '../../Components/Layout/AuthLayout';
import CustomInput from "../../Components/CustomInput"
import CustomButton from '../../Components/CustomButton';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const ForgetPassword = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({})

    useEffect(() => {
        document.title = 'FPUO | Password Recovery';
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/forget-password2')
    }

    return (
        <>
            <AuthLayout authTitle='Find Your FPUO Account' backOption={true}>
                <form>
                    <CustomInput iconShow={faEnvelope} required id='userEmail' type='email' placeholder='Enter Your Email Address' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value })
                    }} />
                    <div className="mt-4 text-center">
                        <CustomButton type='button' variant='primaryButton' text='Search' onClick={handleClick} className="gradientBtn" />
                    </div>
                </form>

            </AuthLayout>
        </>
    )
}



export default ForgetPassword

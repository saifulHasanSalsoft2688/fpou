import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faEnvelope, faBuilding } from '@fortawesome/free-solid-svg-icons'

import "./style.css";

import CustomButton from '../../Components/CustomButton';
import CustomInput from "../../Components/CustomInput"


const Supplier = (props) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({})

    useEffect(() => {
        document.title = 'FPUO | Supplier Registration';
    }, [])

    const handleClick = (e) => {
        // e.preventDefault()
        navigate('/complete-your-profile')
    }

    return (
        <>
        <p className='text-center'>{props?.description}</p>
            <form>
                <CustomInput iconShow={faEnvelope} required id='userEmail' type='email' placeholder=' Email Address' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value })
                }} />

                <CustomInput iconShow={faBuilding} required id='company' type='email' placeholder='Company name' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value })
                }} />

                <div className="mt-4 text-center">
                    <CustomButton type="submit" variant='primaryButton' text='Sign Up' onClick={handleClick} className="gradientBtn"/>
                </div>
            </form>
        </>
    )
}


export default Supplier

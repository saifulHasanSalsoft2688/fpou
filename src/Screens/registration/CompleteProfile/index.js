import { useEffect, useState } from 'react'
import { AuthLayout } from '../../../Components/Layout/AuthLayout';
import CustomButton from '../../../Components/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import CustomUpload from '../../../Components/UploadBtn';
import { useNavigate } from 'react-router';
import { faUpload, faUser, faEnvelope, faPhone, faLocationPin, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const SupplierComplete = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({})
    const [Promotion, Other] = useState()

    useEffect(() => {
        document.title = 'FPUO | Modal Registration';
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }
    return (
        <AuthLayout authTitle='Complete Your Profile' authPara='Hi Company Name, so you are a supplier.
        Tell us more about you!'>
            <form>
                <div className='modalRegistration'>
                    <div className='uploadBtn'>
                        <CustomUpload required iconShow={faUpload} id='uploadImage' type='file' labelClass='uploadIconShow' label="Company logo" inputClass='mainInput d-none' onChange={(event) => {
                            setFormData({ ...formData, file: event.target.value })
                        }} />
                    </div>
                </div>
                <CustomInput iconShow={faUser} required id='fName' type='text' placeholder=' First Name*' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, fName: event.target.value })
                }} />
                <CustomInput iconShow={faUser} required id='lName' type='text' placeholder=' Last Name*' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, lName: event.target.value })
                }} />
                <CustomInput iconShow={faEnvelope} required id='lName' type='email' placeholder='Email Address*' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value })
                }} />
                <CustomInput iconShow={faPhone} required id='phone' type='tel' placeholder='Phone Number*' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, phone: event.target.value })
                }} />
                <CustomInput iconShow={faLocationPin} required id='location' type='text' placeholder='Address*' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, location: event.target.value })
                }} />
                <CustomInput iconShow={faCircleDot} required id='type' type='text' placeholder='Type*' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, type: event.target.value })
                }} />
                <div className="mt-4 text-center">
                        <CustomButton variant='primaryButton' text='Update' onClick={handleClick} className="gradientBtn" />
                    </div>
            </form>

        </AuthLayout>
    )
}

export default SupplierComplete;
import { useEffect, useState } from 'react'
import { AuthLayout } from '../../../Components/Layout/AuthLayout';
import CustomButton from '../../../Components/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import CustomUpload from '../../../Components/UploadBtn';
import { useNavigate } from 'react-router';
import { faUpload, faUser, faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Modal = () => {
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

    const handleChange = (e) => {
       let otherValue = e.target.value;
       if(otherValue == 'Other') {
        document.querySelector('.otherField').classList.remove('d-none');
       } else {
        document.querySelector('.otherField').classList.add('d-none');
       }
    }

    return (
        <AuthLayout authTitle='Are You A Model?' authPara='Kogi migas taxidermy, photo booth bitters 3 wolf moon American Apparel pour-over. Keffiyeh Helvetica mixtape gentrify meh, fap 8-bit Pitchfork tote bag' authSubTitle='Register To Our Network'>
            <form>
                <div className='modalRegistration'>
                    <p className='text-center'>Fingerstache yr raw denim, flannel chia gentrify locavore Austin.Plaid Echo Park Godard bespoke.</p>
                    <div className='uploadBtn text-center'>
                        <CustomUpload required iconShow={faUpload} id='uploadImage' type='file' labelClass='uploadIconShow' label="Please upload Photo" inputClass='mainInput d-none' onChange={(event) => {
                            setFormData({ ...formData, file: event.target.value })
                        }} />
                        <p className='text-danger mb-0'>Please Upload The 5 Best Photos Of You.</p>
                        <p className='text-danger mb-0'>At Least One Is Required</p>
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
                <div className='d-flex justify-content-between flex-wrap mb-3'>
                    <div className='promotionalModal'>
                        <h5 className='mb-0'>Are you a promotional model?</h5>
                    </div>
                    <div className='radioButton'>
                        <CustomInput id="yes" type='radio' name="modal" label="Yes" inputClass='' onChange={(event) => {
                            setFormData({ ...formData, location: event.target.value })
                        }} />
                        <CustomInput id="no" type='radio' name="modal" label="No" inputClass='' onChange={(event) => {
                            setFormData({ ...formData, location: event.target.value })
                        }} />
                    </div>
                </div>
                <div className='d-flex justify-content-between flex-wrap flex-column'>
                    <div className='promotionalModal mb-2'>
                        <h5 className='mb-0'>What type of promotions?</h5>
                    </div>
                    <div className='radioButton'>
                        <CustomInput id="Wines" type='radio' name="promotions" label="Wines" value="Wines" onChange={handleChange} />
                        <CustomInput id="Spirits" type='radio' name="promotions" label="Spirits" value="Spirits" onChange={handleChange}  />
                        <CustomInput id="Beer" type='radio' name="promotions" label="Beer" value="Beer" onChange={handleChange}  />
                        <CustomInput id="CPG" type='radio' name="promotions" label="CPG" value="CPG" onChange={handleChange}  />
                        <CustomInput id="Sporting" type='radio' name="promotions" label="Sporting" value="Sporting" onChange={handleChange}  />
                        <CustomInput id="Trade Show" type='radio' name="promotions" label="Trade Show" value="Trade Show" onChange={handleChange}  />
                        <CustomInput id="Other " type='radio' name="promotions" label="Other" value="Other" onChange={handleChange}  />
                    </div>
                    <div className='otherField d-none'>
                    <CustomInput id='other' type='text' placeholder='write here which one?' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                    setFormData({ ...formData, lName: event.target.value })
                }} />
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-wrap my-3'>
                    <div className='promotionalModal'>
                        <h5 className='mb-0'>Do you have a car?</h5>
                    </div>
                    <div className='radioButton'>
                        <CustomInput id="yes" type='radio' name="car" label="Yes" inputClass='' onChange={(event) => {
                            setFormData({ ...formData, location: event.target.value })
                        }} />
                        <CustomInput id="no" type='radio' name="car" label="No" inputClass='' onChange={(event) => {
                            setFormData({ ...formData, location: event.target.value })
                        }} />
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-wrap mb-3'>
                    <div className='promotionalModal'>
                        <h5 className='mb-0'>Disposition to travel?</h5>
                    </div>
                    <div className='radioButton'>
                        <CustomInput id="yes" type='radio' name="travel" label="Yes" inputClass='' onChange={(event) => {
                            setFormData({ ...formData, location: event.target.value })
                        }} />
                        <CustomInput id="no" type='radio' name="travel" label="No" inputClass='' onChange={(event) => {
                            setFormData({ ...formData, location: event.target.value })
                        }} />
                    </div>
                </div>
                <div className="mt-4 text-center">
                        <CustomButton variant='primaryButton' text='Send' onClick={handleClick} className="gradientBtn" />
                    </div>
            </form>

        </AuthLayout>
    )
}

export default Modal;
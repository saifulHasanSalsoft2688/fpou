import { useState, useEffect } from "react";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import { stats } from "../../Config/Data";
import { faChevronLeft, faUser, faEnvelope, faPhone, faLocationPin, faCircleDot, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import CustomUpload from "../../Components/UploadBtn";
import { useNavigate } from 'react-router';

import "./style.css";
import { Link } from "react-router-dom";

export const CreateEvent = () => {
    const navigate = useNavigate()
    const [statistics, setStatistics] = useState([]);

    const [formData, setFormData] = useState({})
    const [Promotion, Other] = useState()

    useEffect(() => {

        document.title = 'FPUO | Create Event';

        setStatistics(stats)
    }, []);

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }

    return (
        <>
            <DashboardLayout>
                <div className="container-fluid">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="pageTitle">
                                <h3 className="font-weight-bold"><Link to="/company-profile" className="backArrow"><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Event</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="dashCard py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="companyProfileInfo">
                                    <h3 className="mainTitle">Create Event</h3>
                                    <p>Messenger bag skateboard Shoreditch, seitan food truck banjo cardigan blog salvia. PBR four loko Etsy, chambray High Life.</p>
                                </div>
                                <div className="companyLogo">
                                    <img src="./images/e3.png" className="mb-3" />
                                    <p className="labelName">Company Name</p>
                                </div>
                                <form>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

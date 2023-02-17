import { useState, useEffect } from "react";

import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import { stats } from "../../Config/Data";
import { faChevronLeft, faUser, faEnvelope, faPhone, faLocationPin, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { useNavigate } from 'react-router';

import "./style.css";
import { Link } from "react-router-dom";

export const EditCompanyProfile = () => {
    const navigate = useNavigate()
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {

        document.title = 'FPUO | Edit Company Profile';

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
                                <h3 className="font-weight-bold"><Link to="/company-profile" className="backArrow"><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Company Profile</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="dashCard py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="companyProfileInfo">
                                    <h3 className="mainTitle">Edit Profile Profile</h3>
                                    <p>Messenger bag skateboard Shoreditch, seitan food truck banjo cardigan blog salvia. PBR four loko Etsy, chambray High Life.</p>
                                </div>
                                <div className="companyLogo">
                                    <img src="./images/e3.png" className="mb-3" />
                                    <p className="labelName">Company Name</p>
                                </div>
                                <form>
                                    <CustomInput iconShow={faUser} type="text" placeholder="Jon" labelClass='mainLabel' inputClass='mainInput' />
                                    <CustomInput iconShow={faUser} type="text" placeholder="Snow" labelClass='mainLabel' inputClass='mainInput' />
                                    <CustomInput iconShow={faEnvelope} type="email" placeholder="Manager" labelClass='mainLabel' inputClass='mainInput' />
                                    <CustomInput iconShow={faPhone} type="tel" placeholder="(954) 234 3434" labelClass='mainLabel' inputClass='mainInput' />
                                    <CustomInput iconShow={faLocationPin} type="text" placeholder="200 E Main St Phoenix Az" labelClass='mainLabel' inputClass='mainInput' />
                                    <CustomInput iconShow={faCircleDot} type="text" placeholder="Lorem ipsum sit" labelClass='mainLabel' inputClass='mainInput' />

                                    <div className="mt-5">
                                        <CustomButton variant='primaryButton' text='Update' onClick={handleClick} className="gradientBtn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

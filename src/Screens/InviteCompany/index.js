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

export const InviteCompany = () => {
    const navigate = useNavigate()
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {

        document.title = 'FPUO | Invite Companies';

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
                                <h3 className="font-weight-bold"><Link to="/company-profile" className="backArrow"><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Invite Companies</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="dashCard py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="companyProfileInfo mb-4">
                                    <h3 className="mainTitle">Invite Companies</h3>
                                    <p>Messenger bag skateboard Shoreditch, seitan food truck banjo cardigan blog salvia. PBR four loko Etsy, chambray High Life.</p>
                                </div>
                                <form>
                                    <div className="formControl mb-4">
                                        <CustomInput type="text" placeholder="Add The Companies Email Here" labelClass='mainLabel' inputClass='iviteFields' />
                                        <CustomButton  text='Send' onClick={handleClick} className="solidBgBtn gradientBtn" />
                                        <p className="mb-0 text-secondary ps-md-4">Separate each email with a comma </p>
                                    </div>

                                    <div className="formControl mb-4">
                                        <CustomInput type="text" placeholder="Us.Facebook.Com/Fpuo" labelClass='mainLabel' inputClass='iviteFields' />
                                        <CustomButton  text='Facebook' onClick={handleClick} className="solidBgBtn gradientBtn" />
                                        <p className="mb-0 text-secondary ps-md-4">Separate each email with a comma</p>
                                    </div>

                                    <div className="formControl mb-4">
                                        <CustomInput type="text" placeholder="Check This Out" labelClass='mainLabel' inputClass='iviteFields' />
                                        <CustomButton  text='Twitter' onClick={handleClick} className="solidBgBtn gradientBtn" />
                                        <p className="mb-0 text-secondary ps-md-4">Share with Twitter</p>
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

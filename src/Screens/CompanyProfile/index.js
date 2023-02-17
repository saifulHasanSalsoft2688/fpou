import { useState, useEffect } from "react";

import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import { stats } from "../../Config/Data";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./style.css";
import { Link } from "react-router-dom";

export const CompanyProfile = () => {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {

        document.title = 'FPUO | Company Profile';

        setStatistics(stats)
    }, []);

    return (
        <>
            <DashboardLayout>
                <div className="container-fluid">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="pageTitle">
                                <h3 className="font-weight-bold"><Link to="/dashboard" className="backArrow"><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Company Profile</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="dashCard py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="companyProfileInfo">
                                    <h3 className="mainTitle">Company Profile</h3>
                                    <p>Messenger bag skateboard Shoreditch, seitan food truck banjo cardigan blog salvia. PBR four loko Etsy, chambray High Life.</p>
                                </div>
                                <div className="companyLogo">
                                    <img src="./images/e3.png" className="mb-3" />
                                    <p className="labelName">Company Name</p>
                                </div>
                                <div className="row profileData">
                                    <div className="col-md-6">
                                        <div className="formData mb-3">
                                            <p className="labelName">Address</p>
                                            <p className="inputData">200 E Main St Phoenix Az</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="formData mb-3">
                                            <p className="labelName">Phone</p>
                                            <p className="inputData">(954) 234 3434</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="formData mb-3">
                                            <p className="labelName">Type</p>
                                            <p className="inputData">Lorem ipsum sit</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="formData mb-3">
                                            <p className="labelName">Your Title</p>
                                            <p className="inputData">Manager</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="formData mb-3">
                                            <p className="labelName">Your First Name </p>
                                            <p className="inputData">Jon</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="formData mb-3">
                                            <p className="labelName">Your Last Name</p>
                                            <p className="inputData">Snow</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="d-flex flex-wrap gap-15 profileBtns">
                                    <Link to="/edit-company-profile" className="solidBgBtn gradientBtn">Edit Profile</Link>
                                    <Link to="edit-company-profile" className="outlineBgBtn">Eliminate Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

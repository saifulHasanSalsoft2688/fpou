import { useState, useEffect } from 'react';
import Supplier from './Supplier';
import Distributor from './Distributor';
import Retailer from './Retailer';
import Promotor from './Promotor';
import Agencie from './Agencie';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton';

import "./style.css";

import { AuthLayout } from '../../Components/Layout/AuthLayout';


const SignUp = () => {
    const navigate = useNavigate()
    useEffect(() => {
        document.title = 'FPUO | Sign Up';
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/modal')
    }

    const handleClickTour = (e) => {
        e.preventDefault()
        navigate('/tour')
    }

    return (
        <>
            <AuthLayout authSubTitle="Who Are You?" authPara="Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party.">
                <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-supplier-tab" data-bs-toggle="pill" data-bs-target="#pills-supplier" type="button" role="tab" aria-controls="pills-supplier" aria-selected="true">Supplier</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-distributor-tab" data-bs-toggle="pill" data-bs-target="#pills-distributor" type="button" role="tab" aria-controls="pills-distributor" aria-selected="false">Distributor</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-retailer-tab" data-bs-toggle="pill" data-bs-target="#pills-retailer" type="button" role="tab" aria-controls="pills-retailer" aria-selected="false">Retailer</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-promotor-tab" data-bs-toggle="pill" data-bs-target="#pills-promotor" type="button" role="tab" aria-controls="pills-promotor" aria-selected="false">promotor</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-agencie-tab" data-bs-toggle="pill" data-bs-target="#pills-agencie" type="button" role="tab" aria-controls="pills-agencie" aria-selected="false">Agencie</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-supplier" role="tabpanel" aria-labelledby="pills-supplier-tab">
                        <Supplier description="Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party." />
                    </div>
                    <div className="tab-pane fade" id="pills-distributor" role="tabpanel" aria-labelledby="pills-distributor-tab">
                        <Distributor description="Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party." />
                    </div>
                    <div className="tab-pane fade" id="pills-retailer" role="tabpanel" aria-labelledby="pills-retailer-tab">
                        <Retailer description="Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party." />
                    </div>
                    <div className="tab-pane fade" id="pills-promotor" role="tabpanel" aria-labelledby="pills-promotor-tab">
                        <Promotor description="Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party." />
                    </div>
                    <div className="tab-pane fade" id="pills-agencie" role="tabpanel" aria-labelledby="pills-agencie-tab">
                        <Agencie description="Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party." />
                    </div>
                </div>
                <div className='otherBtn text-center'>
                    <div className='takeTour my-4'>
                        <CustomButton variant='primaryButton' text='Take A Tour' onClick={handleClickTour} className="secondaryBtn shadow" />
                    </div>
                    <div className='modelBtn'>
                        <CustomButton variant='primaryButton' text='Are You A Model?' onClick={handleClick} className="secondaryBtn shadow" />
                    </div>
                    <p className='signIn mt-4'>Have an account? <Link to="/">Sign In here</Link></p>
                </div>
            </AuthLayout>
        </>
    )
}


export default SignUp

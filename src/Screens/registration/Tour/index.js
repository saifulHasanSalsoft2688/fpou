import {useEffect} from 'react'
import { AuthLayout } from '../../../Components/Layout/AuthLayout'
import './style.css'

const Tour = () => {

    useEffect(() => {
        document.title = 'FPUO | Take A Tour';
    }, [])

    return (
        <AuthLayout authSubTitle="Take A Tour" authPara="Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party.">
            <div className='takeTour'>
                <p className='text-center'>Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party.</p>

                <div className="accordion" id="take-a-tour">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="who-we-are">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Who We Are
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="who-we-are">
                            <div className="accordion-body">
                                Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="what-we-can">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                What We Can Do For You
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="what-we-can">
                            <div className="accordion-body">
                                Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="for-who">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                For Who
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="for-who">
                            <div className="accordion-body">
                                Messenger bag skateboard Shoreditch, seitan food truck banjocardigan blog salvia. PBR four loko Etsy, chambray High LifeEcho Park squid art party.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Tour;


import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export const AuthLayout = (props) => {
    const id = useLocation();
    const pathname = id.pathname;
    return (
        <>
            <section className="authBg">
                <div className='container'>
                    <div className="row g-0">
                        <div className={pathname == '/registration' ? 'authBox col-lg-8 m-auto' : 'authBox col-lg-6 m-auto'}>
                            <div className="authFormWrapper">
                                <div className="authForm">
                                    <div className="authLogo">
                                        <img src="./images/logo.png" alt="authLogo" />
                                    </div>
                                    <div className="authFormHeader">
                                        <h2 className="authTitle">{props?.authTitle}</h2>
                                        <p className="authPara">{props?.authPara}</p>
                                        <h3 className="authTitle">{props?.authSubTitle}</h3>
                                    </div>
                                    {props?.children}
                                    {props?.backOption &&
                                        <div className="text-center mt-4">
                                            <Link to={'/login'} className='grayColor text-decoration-none fw-bold'><FontAwesomeIcon icon={faLeftLong} className='primaryColor me-2' />Back To Login</Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import React from 'react'
import { useContext } from 'react'
import profileContext from './ContextAPI/profileContext'
import './css/employeeDetails.css'

const EmployeeDetails = () => {
    const context = useContext(profileContext);
    const { profiles } = context;

    let element = profiles[0];
    console.log(element)
    for (let index = 0; index < profiles.length; index++) {
        if (element._id === localStorage.getItem('e-id')) {
            element = profiles[index];
            break;
        }
    }
    let tempname = null;
    let anothername = element.employee_name.split(" ")
    for (let index = 1; index < anothername.length; index++) {
        tempname = anothername[index] + " ";
    }
    return (
        <>
            <main className="e-details-profile e-details-body">
                <div className="e-details-profile-bg"></div>
                <section className="e-details-container">
                    <aside className="e-details-profile-image">
                        <a className="e-details-camera" href="/">
                            <i className="fas fa-camera"></i>
                        </a>
                    </aside>
                    <section className="e-details-profile-info">
                        <h1 className="e-details-first-name">{element.employee_name.split(" ")[0]}</h1>
                        <h1 className="e-details-second-name">{tempname}</h1>
                        <h2>{element.position}</h2>

                        <aside className="e-details-social-media-icons">
                            <p>
                                {/* eslint-disable-next-line */}
                                <a rel="noreferrer" href="#" className='mx-2'>
                                    <i class="fa fa-envelope"></i>
                                </a>
                                {element.employee_email}
                            </p>
                        </aside>
                        <aside className="e-details-social-media-icons">
                            <p>
                                {/* eslint-disable-next-line */}
                                <a rel="noreferrer" className='mx-2' href="#">
                                    <i className="fa fa-phone fa-rotate-90"></i>
                                </a>
                                {element.phoneNumber}
                            </p>
                        </aside>
                        <aside className="e-details-social-media-icons">
                            <p>
                                {/* eslint-disable-next-line */}
                                <a rel="noreferrer" href="#" className='mx-2'>
                                    <i className="fa fa-globe"></i>
                                </a>
                                {element.country}
                            </p>
                        </aside>
                        <aside className="e-details-social-media-icons">
                            <p>
                                {/* eslint-disable-next-line */}
                                <a rel="noreferrer" href="#" className='mx-2'>
                                    <i className="fa fa-map-pin"></i>
                                </a>
                                {element.zip_Code}
                            </p>
                        </aside>

                    </section>
                </section>
                <section className="e-details-statistics">
                    <button className="e-details-icon e-details-arrow e-details-left"></button>
                    <button className="e-details-icon e-details-arrow e-details-right"></button>
                    <p><strong>{element.salary}</strong> Salary</p>
                    <p><strong>{element.age}</strong> Age</p>
                    <p><strong>{element.country}</strong> Country</p>
                </section>
                <button className="e-details-icon e-details-close"></button>
                {localStorage.removeItem('e-id')}
            </main>
        </>
    )

}

export default EmployeeDetails
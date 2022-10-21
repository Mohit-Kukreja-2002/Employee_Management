import React from 'react'
import './Home.css';

// Things Still Required to DO 
// ***** Merging NavBar *****
//  1. Changing Favicon.
// 2. Styling Footer Properly
export default function Home() {
    
    let mousePlaced = (event) => {

     event.currentTarget.style.backgroundColor = "#fff"
    
    }
    let mouseOut = (event) => {

     event.currentTarget.style.backgroundColor = "#88f1e0"
    
    }

    let lowerCardEve = (event)=>{

        event.currentTarget.style.backgroundColor = "#ffd0ff"
    }
    let LowerCardOut = (event) => {

        event.currentTarget.style.backgroundColor = "#aad8ff"
    }

    return (
        <>
       
            <div id="bg-img-placed">
                <div className='container my-3' id="putcol">
                    
                    <div className="card" style={{width:"18rem"}} onMouseOver={mousePlaced} onMouseLeave={mouseOut} >
                        <img src={require('./images/service1.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SERVICES</h5>
                            <p className="card-text"  >We have continiously dominated in managing leave system for different organisations...</p>
                            <a href="/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div className="card" style={{width:"18rem"}} onMouseOver={mousePlaced} onMouseLeave={mouseOut} >
                        <img src={require('./images/vision.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body" >
                            <h5 className="card-title">VISION</h5>
                            <p className="card-text"  >principles that not only company employees respect, but are principles that our customers....</p>
                            <a href="/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div className="card " style={{width:"18rem"}} onMouseOver={mousePlaced} onMouseLeave={mouseOut} >
                        <img src={require('./images/contact.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CONTACT US</h5>
                            <p className="card-text"  >You can contact us by writing a mail to us
                                <b>contactmail@manageus.org</b> or Call us &nbsp;<b>+91 9191919191 </b></p>
                            <a href="/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container my-3' style={{  width: '100%' }}>
                <h4 className='center'>Our Users</h4>
                <marquee>
                    <img src={require('./images/cd1.png')} alt='...' className='mx-5' />
                    <img src={require('./images/cd2.png')} alt='...' className='mx-5' />
                    <img src={require('./images/cd3.png')} alt='...' className='mx-5' />
                    <img src={require('./images/cd4.png')} alt='...' className='mx-5' />
                    <img src={require('./images/cd5.png')} alt='...' className='mx-5' />
                    <img src={require('./images/cd6.png')} alt='...' className='mx-5' />
                    <img src={require('./images/cd7.png')} alt='...' className='mx-5' />
                </marquee>
            </div>

            {/* Why Section Portion  */}

            <div className="card text-center">
                <div className="card-header">
                    Why Us?
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special System</h5>
                    <p className="card-text">We have Special system developed for our clients which is more effective and we assure you 100% accurcy. Spec </p>
                    <a href="/" className="btn btn-primary">VISIT</a>
                </div>
            </div>

            {/* LOwer Card Section  */}

            <div id="bg-img-placed-low">
                <div className='container my-3' id="putcol">
                    <div className="card" style={{ width: "18rem", backgroundColor: "#aad8ff" }}
                    onMouseOver = {lowerCardEve} onMouseOut={LowerCardOut}>
                        <img src={require('./images/data.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Data-driven Consulting</h5>
                            <p className="card-text" >Our benchmarking and consulting ensures policies are competitive, inclusive, and robust to even unexpected leave situations.</p>
                            <a href="/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem", backgroundColor: "#aad8ff" }}
                     onMouseOver = {lowerCardEve} onMouseOut={LowerCardOut}>
                        <img src={require('./images/rating.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">World Class Experience</h5>
                            <p className="card-text">Our leave experts ensure stakeholders have the information they need when they need it, making the experience stress-free.</p>
                            <a href="/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem", backgroundColor: "#aad8ff" }}
                     onMouseOver = {lowerCardEve} onMouseOut={LowerCardOut}>
                        <img src={require('./images/enter-ready.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Enterprise Ready Security</h5>
                            <p className="card-text">We prioritize our customer’s trust, security, and privacy by ensuring enterprise ready security.</p>
                            <a href="/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Footer Section  */}

                <div className='container'>
                    <footer id='end-foot'>
                        copyright &#169; 2022. All right reserved.

                        <ul id='foot-list'>
                            <li><a href='/'> Terms and Conditions &nbsp; </a></li>
                            <li><a href='/'> Privacy Policy &nbsp; </a></li>
                            <li><a href='/'> Security &nbsp; </a></li>
                            <li><a href='/'> Releases &nbsp;</a></li>
                        </ul>
                    </footer>
                </div>
            </div>



        </>
    )
}


import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './css/addEmployee.css'
import { useState } from 'react';
import profileContext from './ContextAPI/profileContext';

export default function Form() {
  let navigator = useNavigate();

  const context = useContext(profileContext);
  const { addProfile } = context;

  // eslint-disable-next-line
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  function useDisplayImage() {
    const [result, setResult] = React.useState("");
    function uploader(e) {
      const imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });
      reader.readAsDataURL(imageFile);
    }
    return { result, uploader };
  }
  const { result, uploader } = useDisplayImage();


  const [details, setdetails] = useState({ suffix: "Mr.", gender: "Male", employee_name: "", date_ofBirth: "2000-01-01", date_ofJoining: "", position: "", employee_email: "", age: "", phoneNumber: "", country: "", zip_code: "", salary: "" });


  const changing = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProfile(details.suffix, details.gender, details.employee_name, details.date_ofBirth, details.date_ofJoining, details.position, details.employee_email, details.age, details.phoneNumber, details.country, details.zip_code, details.salary);
    setdetails({ suffix: "Mr.", gender: "Male", employee_name: "", date_ofBirth: "2000-01-01", date_ofJoining: "", position: "", employee_email: "", age: "", phoneNumber: "", country: "", zip_code: "", salary: "" });
    navigator('/');
  }

  return (
    <section className="h-100 h-custom gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>General Infomation</h3>

                      <div className="App">
                        <input
                          type="file"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                            uploader(e);
                          }}
                        />
                        {result && <img ref={imageRef} src={result} alt="" />}
                      </div>
                      <br />
                      <br />
                      <div className="mb-4 pb-2" >
                        <select className="select" name="suffix" value={details.suffix} onChange={changing} style={{ "marginRight": "42%" }}>
                          <option value="1">Mr.</option>
                          <option value="2">Mrs.</option>
                          <option value="3">Dr.</option>
                        </select>
                        <select className="select" name='gender' value={details.gender} onChange={changing}>
                          <option value="1">Gender</option>
                          <option value="2">Male</option>
                          <option value="3">Female</option>
                        </select>
                      </div>

                      <div className="mb-4 pb-2" style={{ "width": "100%" }}>
                        <div className="form-outline">
                          <input name='employee_name' type="text" id="form3Examplev2" className="form-control form-control-lg" value={details.employee_name} onChange={changing} />
                          <label className="form-label" htmlFor="form3Examplev2">Employee Name</label>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div>
                          <label className="form-label" htmlFor="form3Examplev5">Date of Birth</label>
                          <input name='date_ofBirth' onChange={changing} value={details.date_ofBirth} type="date" id="" style={{ marginLeft: '25px' }} />
                        </div>
                        <br />
                        <div>
                          <label className="form-label" htmlFor="form3Examplev5">Date of Joining</label>
                          <input name="date_ofJoining" onChange={changing} value={details.date_ofJoining} type="date" id="" style={{ marginLeft: '20px' }} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">

                          <div className="form-outline">
                            <input name='position' onChange={changing} value={details.position} type="text" id="form3Examplev5" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplev5">Position</label>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-6 bg-indigo text-white">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>
                      <div className="mb-4">
                        <div className="form-outline form-white">
                          <input name='employee_email' onChange={changing} value={details.employee_email} type="text" id="form3Examplea9" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea9">Employee Email</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input name='age' onChange={changing} value={details.age} type="number" id="form3Examplea7" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea7">Age</label>
                          </div>

                        </div>
                        <div className="col-md-8 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input name='phoneNumber' onChange={changing} value={details.phoneNumber} type="text" id="form3Examplea8" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea8">Phone Number</label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input name='country' onChange={changing} value={details.country} type="text" id="form3Examplea6" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea6">Country</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input name='zip_code' onChange={changing} value={details.zip_code} type="text" id="form3Examplea4" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea4">Zip Code</label>
                          </div>
                        </div>
                        <div className="col-md-7 mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input name='salary' onChange={changing} value={details.salary} type="number" id="form3Examplea5" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea5">Salary</label>
                          </div>
                        </div>
                      </div>

                      {/* <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea3">Additional Information</label>
                        </div>
                      </div> */}

                      <button name='submit' onClick={handleSubmit} type="submit" className="btn btn-light btn-lg"
                        data-mdb-ripple-color="dark">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


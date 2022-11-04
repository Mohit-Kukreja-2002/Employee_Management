import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './css/addEmployee.css'

export default function Form() {
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

                      <div className="App float-end">
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
                      <div className="mb-4 pb-2">
                        <select className="select ">
                          <option value="1">Mr.</option>
                          <option value="2">Mrs.</option>
                          <option value="3">Dr.</option>
                        </select>
                        <select className="select" style={{ marginLeft: '15rem' }}>
                          <option value="1">Gender</option>
                          <option value="2">Male</option>
                          <option value="3">Female</option>
                        </select>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <input type="text" id="form3Examplev2" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplev2">First name</label>
                          </div>

                        </div>
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <input type="text" id="form3Examplev3" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplev3">Last name</label>
                          </div>

                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div>
                          <label className="form-label" htmlFor="form3Examplev5">Date of Birth</label>
                          <input type="date" name="" id="" style={{ marginLeft: '25px' }} />
                        </div>
                        <br />
                        <div>
                          <label className="form-label" htmlFor="form3Examplev5">Date of Joining</label>
                          <input type="date" name="" id="" style={{ marginLeft: '20px' }} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">

                          <div className="form-outline">
                            <input type="text" id="form3Examplev5" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplev5">Position</label>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-6 bg-indigo text-white">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea2">Street + Nr</label>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea3">Additional Information</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea4" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea4">Zip Code</label>
                          </div>

                        </div>
                        <div className="col-md-7 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea5" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea5">Place</label>
                          </div>

                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea6" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea6">Country</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea7" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea7">Code +</label>
                          </div>

                        </div>
                        <div className="col-md-7 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea8" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea8">Phone Number</label>
                          </div>

                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea9" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea9">Your Email</label>
                        </div>
                      </div>

                      <button type="button" className="btn btn-light btn-lg"
                        data-mdb-ripple-color="dark">Register</button>
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


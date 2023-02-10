import React from "react";

function Form1() {
  return (
    <form
      name="signinform"
      className="row sign-in-form"
      noValidate="novalidate"
    >
      {/* Title*/}
      <div className="col-md-12">
        <div className="register-form-title text-center">
          <h4 className="h4-lg">Hello!</h4>
          <p className="p-xl">Please fill some details about yourself</p>
        </div>
      </div>

      {/* Form Input */}
      {/* <div className="col-md-12 pb-25">
                    <label>
                      <h5 className="h5-xxs">
                        Choose a plan <sup className="text-red">*</sup>
                      </h5>
                    </label>
                    <div className="plans">
                      <button className="btn btn-orange-red">Basic</button>
                      <button className="btn btn-yellow-outline">
                        Advance
                      </button>
                      <button className="btn btn-yellow-outline">
                        Business
                      </button>
                    </div>
                  </div> */}
      <div className="col-md-12 pb-3">
        <div className="row">
          <div className="col-6">
            <label>
              <h5 className="h5-xxs">
                Name <sup className="text-red">*</sup>
              </h5>
            </label>
            <input
              className="form-control text"
              type="text"
              name="name"
              placeholder="Jhon Doe"
            />
          </div>
          <div className="col-6">
            <label>
              <h5 className="h5-xxs">
                Company <sup className="text-red">*</sup>
              </h5>
            </label>
            <input
              className="form-control text"
              type="text"
              name="name"
              placeholder="xyz Inc"
            />
          </div>
        </div>
      </div>

      <div className="col-md-12 pb-3">
        <div className="row">
          <div className="col-6">
            <label>
              <h5 className="h5-xxs">
                Email <sup className="text-red">*</sup>
              </h5>
            </label>
            <input
              className="form-control email"
              type="email"
              name="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="col-6">
            <label>
              <h5 className="h5-xxs">
                Contact <sup className="text-red">*</sup>
              </h5>
            </label>
            <input
              className="form-control"
              type="text"
              name="phone"
              placeholder="+91 8877841523"
            />
          </div>
        </div>
      </div>
      {/* Form Input */}

      {/* Form Submit Button */}
      <div className="col-md-12">
        <button
          type="submit"
          className="btn btn-outline btn-yellow tra-yellow-hover submit"
        >
          Start my 14 days free trial
        </button>
      </div>
      {/* Form Data  */}
    </form>
  );
}

export default Form1;

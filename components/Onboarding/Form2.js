import Link from "next/link";
import React, { useState } from "react";

function Form2() {
  const [solution, setSolution] = useState(false);
  return (
    <form name="signinform" className="row sign-in-form">
      {/* Title*/}
      <div className="col-md-12">
        <div className="register-form-title text-center">
          <h4 className="h4-lg">Welcome!</h4>
          <p className="p-xl">
            Please fill some details about your requirements
          </p>
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
        <label>
          <h5 className="h5-xxs">How many products do you need?</h5>
        </label>
        <select
          className="form-control text"
          type="select"
          name="name"
          placeholder="Jhon Doe"
        >
          <option disabled={true}>Select a Value</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={1250}>1250</option>
          <option value={1500}>1500</option>
          <option value={2000}>2000</option>
          <option value={3000}>3000</option>
          <option value={"more"}>more than 3000</option>
        </select>
      </div>
      <div className="col-md-12 pb-3">
        <label>
          <h5 className="h5-xxs">Which industry do you serve?</h5>
        </label>
        <select
          className="form-control text"
          type="select"
          name="name"
          placeholder="Jhon Doe"
        >
          <option disabled={true}>Select a Industry</option>
          <option value={"pharmaceuticals"}>Pharmaceuticals</option>
          <option value={"agriculture"}>Agriculture</option>
          <option value={"education"}>Education</option>
        </select>
      </div>

      <div className="col-md-12 pb-3">
        <label>
          <h5 className="h5-xxs">
            Do you use any existing Brand Protection Solution?
          </h5>
        </label>
        <div className="row">
          <div className="col-6">
            <label>
              <h5 className="h5-xxs">Yes</h5>
            </label>
            <input
              checked={solution}
              onClick={() => {
                setSolution(!solution);
              }}
              className="checkbox-input"
              type="checkbox"
            />
          </div>
          <div className="col-6">
            <label>
              <h5 className="h5-xxs">No</h5>
            </label>
            <input
              checked={!solution}
              onClick={() => {
                setSolution(!solution);
              }}
              className="checkbox-input"
              type="checkbox"
            />
          </div>
        </div>
      </div>

      {solution && (
        <div className="col-md-12 pb-3">
          <label>
            <h5 className="h5-xxs">What solution do you use?</h5>
          </label>
          <input
            className="form-control text"
            type="text"
            name="name"
            placeholder="Solution Name"
          />
        </div>
      )}

      {/* Form Input */}

      {/* Form Submit Button */}
      <div className="col-md-12">
        <button
          type="submit"
          className="btn btn-outline btn-yellow tra-yellow-hover submit"
        >
          Login to Dashboard
        </button>
        <p className="text-center mt-3">
          <Link href={"https://app.signettags.com"}>Skip</Link>
        </p>
      </div>
      {/* Form Data  */}
    </form>
  );
}

export default Form2;

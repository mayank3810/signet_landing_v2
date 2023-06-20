import Link from "next/link";
import React, { useState } from "react";

function Form2({ organizationId }) {
  const [solution, setSolution] = useState(false);

  const [requiredTags, setRequiredTags] = useState(0);
  const [otherSolution, setOtherSolution] = useState("");
  const [workflow, setWorkflow] = useState("");
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [apiResp, setApiResp] = useState("");

  const editOrganization = async (e) => {
    e.preventDefault();
    let id = organizationId;
    if (!organizationId) {
      id = localStorage.getItem("organizationId");
    }

    setLoading(true);
    const rawResponse = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "organization/editOrganization",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: organizationId,
          requiredTags,
          otherSolution,
          workflow,
        }),
      }
    );
    if (rawResponse.ok) {
      const content = await rawResponse.json();
      setLoading(false);
      setApiResp("Your details has been saved. Thank you.");
      localStorage.removeItem("organizationId");
      localStorage.removeItem("planName");
      setTimeout(() => {
        setSuccess(true);
      }, 500);

      console.log(content);
    } else {
      setApiResp("An error occurred. Please retry.");
      setLoading(false);
    }
  };
  return (
    <>
      {success ? (
        <>
          <div className="txt-box p-5 text-center">
            <img
              width={100}
              className="img-fluid"
              src="/images/png-icons/verified.svg"
              alt="verified_icon"
            ></img>
            <h5 className="h3-xl mb-5 mt-30">Signup Complete !</h5>

            <h6 className="h5-lg mt-50 mb-30">
              Please Login with the credentials sent on mail
            </h6>
            <Link
              href={"https://app.signettags.com"}
              style={{width: "100% !important"}}
              className="btn  btn-yellow tra-yellow-hover w-50"
            >
              Login to Dashboard
            </Link>
          </div>
        </>
      ) : (
        <form className="row sign-in-form">
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
          <div className="col-md-12 mt-4">
            <label>
              <h6 className="h5-xxs">How many QR codes do you need?</h6>
            </label>
            <select
              className="form-control text"
              type="select"
              name="name"
              placeholder="Jhon Doe"
              value={requiredTags ?? 0}
              onChange={(e) => setRequiredTags(e.target.value)}
            >
              <option value={0} disabled={true}>
                Select 
              </option>
              <option value={500}>1 - 500</option>
              <option value={1000}>1000</option>
              <option value={1250}>1250</option>
              <option value={1500}>1500</option>
              <option value={2000}>2000</option>
              <option value={3000}>3000</option>
              <option value={"more"}>more than 3000</option>
            </select>
          </div>
          <div className="col-md-12 mt-4">
            <label>
              <h6 className="h5-xxs">Which industry do you serve?</h6>
            </label>
            <select
              className="form-control text"
              type="select"
              name="name"
              value={workflow ?? ""}
              onChange={(e) => setWorkflow(e.target.value)}
              placeholder="Jhon Doe"
            >
              <option value={""} disabled={true}>
                Select a Industry
              </option>
              <option value={"pharmaceuticals"}>Pharmaceuticals</option>
              <option value={"agriculture"}>Agriculture</option>
              <option value={"cosmetics-and-perfumes"}>
                Cosmetics & Perfumes
              </option>
              <option value={"food-and-beverages"}>Food & Beverages</option>
              <option value={"auto-parts"}>Auto Parts</option>
              <option value={"cannabis"}>Cannabis</option>
              <option value={"sports-equipments"}>Sports Equipments</option>
              <option value={"document-security"}>Document Security</option>
              <option value={"clothing-and-footwear"}>
                {" "}
                Apparel and Clothing
              </option>
              <option value={"Shoes and footwear"}>Shoes and footwear</option>
            </select>
          </div>

          <div className="col-md-12 mt-4">
            <label>
              <h6 className="h5-xxs">
                Do you use any existing solution?
              </h6>
            </label>
            <div className="row">
              <div className="col-6">
                <label>
                  <h6 className="h5-xxs">Yes</h6>
                </label>
                <input
                  checked={solution}
                  onChange={() => {
                    setSolution(!solution);
                  }}
                  className="checkbox-input"
                  type="checkbox"
                />
              </div>
              <div className="col-6">
                <label>
                  <h6 className="h5-xxs">No</h6>
                </label>
                <input
                  checked={!solution}
                  onChange={() => {
                    setSolution(!solution);
                  }}
                  className="checkbox-input"
                  type="checkbox"
                />
              </div>
            </div>
          </div>

          {solution && (
            <div className="col-md-12 mt-4">
              <label>
                <h6 className="h5-xxs">What solution do you use?</h6>
              </label>
              <input
                className="form-control text"
                type="text"
                name="name"
                placeholder="Solution Name"
                value={otherSolution}
                onChange={(e) => setOtherSolution(e.target.value)}
              />
            </div>
          )}

          {/* Form Input */}

          {/* Form Submit Button */}
          <div className="col-md-12">
            <div className="col-md-12 mt-15 form-btn text-right">
              {apiResp && (
                <span
                  className={
                    apiResp.includes("error")
                      ? "orange-red-color"
                      : "green-color"
                  }
                >
                  {apiResp}
                </span>
              )}
              <button
                onClick={editOrganization}
                className="btn btn-outline btn-yellow tra-yellow-hover submit"
              >
                {loading ? "Submitting" : "Submit"}
              </button>
              <p className="text-center mt-3">
                <a className="cursor-pointer" onClick={() => setSuccess(true)}>
                  Skip
                </a>
              </p>
            </div>
          </div>
          {/* Form Data  */}
        </form>
      )}
    </>
  );
}

export default Form2;

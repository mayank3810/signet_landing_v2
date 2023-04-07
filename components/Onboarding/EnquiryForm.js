import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function EnquiryForm({ setStage, setOrganizationId }) {
  const [email, setEmail] = useState({ data: "", error: false });
  const [name, setName] = useState({ data: "", error: false });
  const [company, setCompany] = useState({ data: "", error: false });
  const [contact, setContact] = useState({ data: "", error: false });

  const [loading, setLoading] = useState(false);
  const [apiResp, setApiResp] = useState("");

  const [plan, setPlan] = useState("");

  const router = useRouter();

  useEffect(() => {
    const _plan = localStorage.getItem("planName") || 'Enterprise';
    setPlan(_plan);
    if (!_plan || _plan === "") {
      alert("No Plan has been selected. Please select a plan");
      setTimeout(() => {
        router.push("/pricing");
      }, 500);
    }
  }, []);

  const createOrganization = async (e) => {
    e.preventDefault();
    if (!plan || plan === "") {
      alert("No Plan has been selected. Please select a plan");
      setTimeout(() => {
        router.push("/pricing");
      }, 500);
    }
    if (name.data === "") {
      setName({ data: "", error: true });
    }
    if (email.data === "") {
      setEmail({ data: "", error: true });
    }
    if (contact.data === "") {
      setContact({ data: "", error: true });
    }
    if (company.data === "") {
      setCompany({ data: "", error: true });
    }
    if (
      name.data != "" &&
      email.data != "" &&
      contact.data != "" &&
      company.data != ""
    ) {
      // console.log({
      //   email: email.data,
      //   name: name.data,
      //   companyName: company.data,
      //   phone: contact.data,
      // });
      setLoading(true);
      const rawResponse = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "organization/createOrganization",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            planName: plan,
            billingEmail: email.data,
            name: name.data,
            companyName: company.data,
            phone: contact.data,
          }),
        }
      );
      if (rawResponse.ok) {
        const content = await rawResponse.json();
        setLoading(false);
        setApiResp("You have signed up successfully. Thank you.");
        localStorage.setItem("organizationId", content?.data?.organization._id);
        setOrganizationId(content?.data?.organization._id);
        setTimeout(() => {
          setStage(2);
        }, 300);
        console.log(content);
        setName({ data: "", error: false });
        setEmail({ data: "", error: false });
        setCompany({ data: "", error: false });
        setContact({ data: "", error: false });
        localStorage.removeItem("planName");
      } else {
        setApiResp("An error occurred. Please retry.");
        setLoading(false);
      }
    }
  };
  return (
    <form className="row enquiry-form">
      {/* Title*/}
      <div className="col-md-12">
        <div className="register-form-title text-center">
          <h4 className="h4-lg">Request a quote</h4>
        </div>
      </div>

      <div className="col-md-12 ">
        <div className="row">
          <div className="col-12">
            <label> Your Name </label>
            <input
              className="form-control text"
              type="text"
              value={name.data ?? ""}
              onChange={(e) => setName({ data: e.target.value, error: false })}
            />
            {name.error && (
              <span className="error" htmlFor="name">
                Required
              </span>
            )}
          </div>
          {/* <div className="col-12 mt-2">
            <label>
              <label> Company Name </label>
            </label>
            <input
              className="form-control text"
              type="text"
              value={company.data ?? ""}
              onChange={(e) =>
                setCompany({ data: e.target.value, error: false })
              }
            />
            {company.error && (
              <span className="error">Company cannot be blank</span>
            )}
          </div> */}
        </div>
      </div>

      <div className="col-12 mt-2">
        <label>
          Business email
        </label>
        <input
          className="form-control email"
          type="email"
          value={email.data ?? ""}
          onChange={(e) => setEmail({ data: e.target.value, error: false })}
        />
        {email.error && (
          <span className="error">Required</span>
        )}
      </div>
      <div className="col-12 mt-2">
        <label>
          Phone number
        </label>
        <input
          className="form-control"
          type="text"
          value={contact.data ?? ""}
          onChange={(e) =>
            setContact({ data: e.target.value, error: false })
          }
        />
        {contact.error && (
          <span className="error">Required</span>
        )}
      </div>

      <div className="col-12 mt-2">
        <label>
          How many tags do you need per month?
        </label>
        <select className="form-control" alue={contact.data ?? ""} onChange={(e) =>
          setContact({ data: e.target.value, error: false })
        }>
          <option> - </option>
          <option> Upto 1000 products per month </option>
          <option> Upto 5000 products per month </option>
          <option> Upto 10000 products per month </option>
          <option> More than 10000 products per month</option>
        </select>
        {contact.error && (
          <span className="error">Required</span>
        )}
      </div>


      <div className="col-12 mt-2">
        <label>
        Briefly describe your needs
        </label>
        <textarea
          className="form-control"
          type="text"
          value={contact.data ?? ""}
          onChange={(e) =>
            setContact({ data: e.target.value, error: false })
          }
        />
        {contact.error && (
          <span className="error">Required</span>
        )}
      </div>


      {/* Form Submit Button */}
      <div className="col-md-12 mt-4">
        <div className="col-md-12 form-btn text-right">
          {apiResp && (
            <span
              className={
                apiResp.includes("error") ? "orange-red-color" : "green-color"
              }
            >
              {apiResp}
            </span>
          )}
          <button
            onClick={createOrganization}
            className="btn btn-outline btn-yellow tra-yellow-hover submit"
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </div>
      {/* Form Data  */}
    </form>
  );
}

export default EnquiryForm;

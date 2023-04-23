import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function EnquiryForm() {
  const [email, setEmail] = useState({ data: "", error: false });
  const [name, setName] = useState({ data: "", error: false });
  const [quantity, setQuantity] = useState({ data: "", error: false });
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState({ data: "", error: false });

  const [loading, setLoading] = useState(false);
  const [apiResp, setApiResp] = useState("");

  // const [plan, setPlan] = useState("");

  // const router = useRouter();

  // useEffect(() => {
  //   const _plan = localStorage.getItem("planName") || "Enterprise";
  //   setPlan(_plan);
  //   if (!_plan || _plan === "") {
  //     alert("No Plan has been selected. Please select a plan");
  //     setTimeout(() => {
  //       router.push("/pricing");
  //     }, 500);
  //   }
  // }, []);

  const createQuote = async (e) => {
    e.preventDefault();
    const emailRegex =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const valid = emailRegex.test(email.data);
    if (name.data === "") {
      setName({ data: "", error: true });
    }
    if (email.data === "" || !valid) {
      setEmail({ data: "", error: true });
    }
    if (contact.data === "") {
      setContact({ data: "", error: true });
    }
    if (quantity.data === "") {
      setQuantity({ data: "", error: true });
    }
    if (
      name.data != "" &&
      email.data != "" &&
      valid &&
      contact.data != "" &&
      quantity.data != ""
    ) {
      setLoading(true);
      const data = {
        email: email.data,
        name: name.data,
        phone: contact.data,
        quantity: quantity.data,
        description: description,
      };
      // console.log(data);
      const rawResponse = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "general/saveQuote",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (rawResponse.ok) {
        setLoading(false);
        setApiResp("Thank you for your Enquiry. We will get back to you within 24-48 hours.");

        setName({ data: "", error: false });
        setEmail({ data: "", error: false });
        setQuantity({ data: "", error: false });
        setDescription("");
        setContact({ data: "", error: false });
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
          <h4 className="h4-lg">Get Free Samples</h4>
          <p style={{lineHeight:'initial'}}>
            Get Free Starter Kit to test the technology yourself before you decide to scale.
          </p>
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
        <label>Business email</label>
        <input
          className="form-control email"
          type="email"
          value={email.data ?? ""}
          onChange={(e) => setEmail({ data: e.target.value, error: false })}
        />
        {email.error && <span className="error">Invalid Email</span>}
      </div>
      <div className="col-12 mt-2">
        <label>Phone number</label>
        <input
          className="form-control"
          type="text"
          value={contact.data ?? ""}
          onChange={(e) => setContact({ data: e.target.value, error: false })}
        />
        {contact.error && <span className="error">Required</span>}
      </div>

      <div className="col-12 mt-2">
        <label>How many tags do you need per month?</label>
        <select
          className="form-control"
          value={quantity.data ?? ""}
          onChange={(e) => setQuantity({ data: e.target.value, error: false })}
        >
          <option> - </option>
          <option> Upto 1000 products per month </option>
          <option> Upto 5000 products per month </option>
          <option> Upto 10000 products per month </option>
          <option> More than 10000 products per month</option>
        </select>
        {contact.error && <span className="error">Required</span>}
      </div>

      <div className="col-12 mt-2">
        <label>Briefly describe your needs</label>
        <textarea
          className="form-control"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Form Submit Button */}
      <div className="col-md-12 mt-4">
        {apiResp && (
          <div
            className={
              apiResp.includes("error")
                ? "orange-red-color request-quote-message mb-4  d-block"
                : "green-color mb-4  request-quote-message d-block"
            }
          >
            {apiResp}
          </div>
        )}

        <div className="col-md-12 form-btn text-right">

          <button
            onClick={createQuote}
            className="btn btn-success"
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

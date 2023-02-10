import React from "react";

function LeftText({ heading, subheading }) {
  return (
    <div className="txt-box p-5">
      <h3 class="h3-xl mb-5">{heading}</h3>

      <h5
        className="h5-lg mt-20"
        dangerouslySetInnerHTML={{ __html: subheading }}
      ></h5>
      <h5 className="h4-sm mt-50">100% Risk-Free Trial</h5>
      <p className="p-lg mt-2">
        Get access to all features.
        <br /> Pay NOTHING for the first 7-days.
        <br /> Cancel at ANY time during your trial.
      </p>
    </div>
  );
}

export default LeftText;

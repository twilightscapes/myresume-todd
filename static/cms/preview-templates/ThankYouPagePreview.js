import React from "react";
import { ThankYouPageTemplate } from "../../templates/index-page.js";


const ThankYouPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  

  if (data) {
    console.log(data);
    return <ThankYouPageTemplate data={data} />;
  } else {
    console.log("CHECK");
    return <div>Loading...</div>;
  }
};

export default ThankYouPagePreview;
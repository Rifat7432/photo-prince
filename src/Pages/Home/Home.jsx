import React from "react";
import useTitle from "../../Utilities/Utilities";
import Banner from "./Banner";
import ConnectUs from "./ConnectUs";
import Equipment from "./Equipment";
import Services from "./Services";
// this home component which show Banner ,Services, ConnectU,s Equipment,
// component
const Home = () => {
  //dynamic title
  useTitle("Photo Prince - Home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ConnectUs></ConnectUs>
      <Equipment></Equipment>
    </div>
  );
};

export default Home;

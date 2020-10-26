import React from "react";
import NavBar from "../../components/navigation";
import Instances from "../../components/instance/instances";
import Summary from "../../components/instance/summary";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Summary />
      <Instances />
    </div>
  );
};

export default Home;

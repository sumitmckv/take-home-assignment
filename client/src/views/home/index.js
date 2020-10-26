import React, { useState, useEffect } from "react";
import NavBar from "../../components/navigation";
import Instances from "../../components/instance/instances";
import Summary from "../../components/instance/summary";
import { fetcher } from "../../api";
import Notify from "../../components/alert";

const Home = () => {
  const [instances, setInstances] = useState([]);
  const [isUsd, setIsUsd] = useState(true);

  useEffect(() => {
    fetcher("/api/instances").then(({ success, instances }) => {
      if (success) {
        setList(instances);
      }
    });
  }, []);

  const setList = (instances) => {
    setInstances(
      instances.map((instance) => {
        instance.costPerHourInr = instance.costPerHour / 0.015;
        return instance;
      })
    );
  };

  const onAction = async (id, action) => {
    const { success, updatedInstance } = await fetcher(
      `/api/instances/${action}/${id}`
    );
    if (success) {
      instances.find((instance) => instance.id === updatedInstance.id).status =
        updatedInstance.status;
      setList(instances);
    }
  };

  const toggleCurrency = () => {
    setIsUsd(!isUsd);
  };

  if (!instances) {
    return (
      <Notify open={true} message="Loading instances..." severity="info" />
    );
  }

  return (
    <div>
      <NavBar />
      <Summary
        instances={instances}
        isUsd={isUsd}
        toggleCurrency={toggleCurrency}
      />
      <Instances instances={instances} isUsd={isUsd} onAction={onAction} />
    </div>
  );
};

export default Home;

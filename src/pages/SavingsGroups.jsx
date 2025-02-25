import React, { useState, useEffect } from "react";
import SavingsGroupCard from "../components/SavingsGroupCard";
import savingsService from "../services/savingsService";

function SavingsGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    savingsService.getGroups().then(setGroups);
  }, []);

  return (
    <div>
      <h1>Savings Groups</h1>
      {groups.map((group) => (
        <SavingsGroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}

export default SavingsGroups;

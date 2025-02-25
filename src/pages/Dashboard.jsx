import React from "react";
import LoanCard from "../components/LoanCard";
import SavingsGroupCard from "../components/SavingsGroupCard";
import { Container, Typography } from "@mui/material";

function Dashboard() {
  const userLoans = [
    { id: 1, name: "Personal Loan", amount: 500, interestRate: 5, status: "Approved" },
    { id: 2, name: "Business Loan", amount: 1000, interestRate: 7, status: "Pending" },
  ];

  const userSavingsGroups = [
    { id: 1, name: "Family Savings", members: ["Alice", "Bob"], totalSavings: 1200 },
  ];

  return (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="h6">Your Loans</Typography>
      {userLoans.map((loan) => (
        <LoanCard key={loan.id} loan={loan} />
      ))}

      <Typography variant="h6">Your Savings Groups</Typography>
      {userSavingsGroups.map((group) => (
        <SavingsGroupCard key={group.id} group={group} />
      ))}
    </Container>
  );
}

export default Dashboard;

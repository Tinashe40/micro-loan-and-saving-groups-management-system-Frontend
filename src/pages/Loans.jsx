import React, { useState, useEffect } from "react";
import LoanCard from "../components/LoanCard";
import loanService from "../services/loanService";
import { Container, Typography } from "@mui/material";

function Loans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    loanService.getLoans().then(setLoans);
  }, []);

  return (
    <Container>
      <Typography variant="h4">Loan Management</Typography>
      {loans.map((loan) => (
        <LoanCard key={loan.id} loan={loan} />
      ))}
    </Container>
  );
}

export default Loans;

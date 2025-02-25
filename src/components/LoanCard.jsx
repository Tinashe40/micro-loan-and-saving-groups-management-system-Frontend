import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function LoanCard({ loan }) {
  return (
    <Card sx={{ margin: "10px", padding: "10px" }}>
      <CardContent>
        <Typography variant="h5">{loan.name}</Typography>
        <Typography color="textSecondary">Amount: ${loan.amount}</Typography>
        <Typography color="textSecondary">
          Interest Rate: {loan.interestRate}%
        </Typography>
        <Typography color="textSecondary">Status: {loan.status}</Typography>
      </CardContent>
    </Card>
  );
}

export default LoanCard;

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function SavingsGroupCard({ group }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{group.name}</Typography>
        <Typography color="textSecondary">
          Members: {group.members.length}
        </Typography>
        <Typography color="textSecondary">
          Total Savings: ${group.totalSavings}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SavingsGroupCard;

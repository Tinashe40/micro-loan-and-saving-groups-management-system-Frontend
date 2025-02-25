import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import savingsService from "../services/savingsService";

function CreateGroupForm() {
  const [group, setGroup] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await savingsService.createGroup(group);
    alert("Group created successfully!");
  };

  return (
    <Container>
      <Typography variant="h4">Create Savings Group</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Group Name"
          name="name"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Group
        </Button>
      </form>
    </Container>
  );
}

export default CreateGroupForm;

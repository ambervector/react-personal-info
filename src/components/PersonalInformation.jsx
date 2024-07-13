import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const PersonalInformation = ({ formData, setFormData, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Personal Information</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Name"
          fullWidth
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Phone"
          fullWidth
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInformation;

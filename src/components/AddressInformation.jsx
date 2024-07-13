import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const AddressInformation = ({ formData, setFormData, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Address Information</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address Line 1"
          fullWidth
          value={formData.address1}
          onChange={(e) =>
            setFormData({ ...formData, address1: e.target.value })
          }
          error={!!errors.address1}
          helperText={errors.address1}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address Line 2"
          fullWidth
          value={formData.address2}
          onChange={(e) =>
            setFormData({ ...formData, address2: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="City"
          fullWidth
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          error={!!errors.city}
          helperText={errors.city}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="State"
          fullWidth
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          error={!!errors.state}
          helperText={errors.state}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Zip Code"
          fullWidth
          value={formData.zipCode}
          onChange={(e) =>
            setFormData({ ...formData, zipCode: e.target.value })
          }
          error={!!errors.zipCode}
          helperText={errors.zipCode}
        />
      </Grid>
    </Grid>
  );
};

export default AddressInformation;

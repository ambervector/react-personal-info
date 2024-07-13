import React from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

const AddressInformation = ({ formData, setFormData, errors }) => {
  const [style, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translateX(-200px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    config: { duration: 1000 }, // Set the duration to 1000ms (1 second)
  }));

  useEffect(() => {
    api.start();
  }, [api]);
  return (
    <animated.div style={style}>
      <Grid style={style} container spacing={2}>
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
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
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
    </animated.div>
  );
};

export default AddressInformation;

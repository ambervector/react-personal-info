import React from "react";
import { Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

const Confirmation = ({ formData }) => {
  const [style, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(-200px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 }, // Set the duration to 1000ms (1 second)
  }));

  useEffect(() => {
    api.start();
  }, [api]);

  return (
    <animated.div style={style}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Confirmation</Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={formData.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={formData.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phone" secondary={formData.phone} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Address Line 1"
                secondary={formData.address1}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Address Line 2"
                secondary={formData.address2}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={formData.city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="State" secondary={formData.state} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Zip Code" secondary={formData.zipCode} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </animated.div>
  );
};

export default Confirmation;

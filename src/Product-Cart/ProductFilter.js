import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(2),
    minWidth: 225,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
  selectCurrencyText: {
    color: "#00e676",

    fontWeight: "bold",
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");

  const currencyDropdownHandler = (event) => {
    setCurrency(event.target.value);
    props.currencyHandler(event.target.value);
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-end"
    >
      <Grid item sm={9} lg={9} md={8} style={{ textAlign: "right" }}>
        <Typography variant="body1" className={classes.selectCurrencyText}>
          Select Currency
        </Typography>
      </Grid>
      <Grid item sm={3} lg={3} md={4}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Select Currency
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={currency}
            onChange={currencyDropdownHandler}
            label="Select-Currency"
          >
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

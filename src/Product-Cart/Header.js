import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#14696d;",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
   
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" >
            Product-Cart
          </Typography>
        </Toolbar>
      </AppBar>
   
  );
}

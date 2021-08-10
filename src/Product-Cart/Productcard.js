import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { Grid, Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 280,
    border: "1px solid grey",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
  },

  media: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    objectFit: "cover",
   
  },
  priceText: {
    color: "#00e676",
    fontWeight: "bold",
    fontSize: "17px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  span: {
    color: "#886060",
    fontSize: "17px",
    fontWeight: "bold",
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" style={{ marginTop: "30px" }}>
      {props.product_item.map((item) => {
        return (
          <Grid item xs={12} lg={4} sm={6} key={item.id}>
            <Grid container direction="column" alignItems="center" spacing={1}>
              <Grid item>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={item.product_image}
                  />
                </Card>
              </Grid>

              <Grid item>
                <Typography variant="body1" color="textPrimary" component="p">
                  {item.product_name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  className={classes.priceText}
                  component="p"
                >
                  Price: <span className={classes.span}>{item.INR}</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ProductFilter from "./ProductFilter";
import ProoductCard from "./Productcard";
import Product1_IMg from "./asset/product1.jpg";
import Product2_IMg from "./asset/product2.jpg";
import Product3_IMg from "./asset/product3.jpg";

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
  },
}));

export default function Product(props) {
  const product_item = [
    {
      id: 1,
      product_name: "Men_Shoes",
      product_image: Product1_IMg,
      INR: 200,
    },
    {
      id: 2,
      product_name: "Men_Cloths",
      product_image: Product2_IMg,
      INR: 100,
    },
    {
      id: 3,
      product_name: "Men_Watch",
      product_image: Product3_IMg,
      INR: 120,
    },
  ];
  const [productData, setData] = useState(product_item);

  const getResponce = async (selectedCurrency) => {
    //Api call
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/e19f63567c63588ad8f67956/latest/INR"
    );
    const data = await response.json();
    console.log(data.conversion_rates, "backend_data");
    const { USD } = data.conversion_rates;
    console.log(selectedCurrency, "dropdowndata");
    const existingData = product_item.slice();

    if (selectedCurrency === "USD") {
      let updatedData = productData.map((item) => {
        return {
          id: item.id,
          product_name: item.product_name,
          product_image: item.product_image,
          INR: `${USD}$`,
        };
      });
      console.log(updatedData);
      setData(updatedData);
    }
    if (selectedCurrency === "INR") {
      setData(existingData);
    }
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProductFilter currencyHandler={getResponce} />

      <ProoductCard product_item={productData} />
    </div>
  );
}

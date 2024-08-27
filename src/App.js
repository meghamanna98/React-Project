// src/App.js
import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileDetailView, setIsMobileDetailView] = useState(false);

  // Determine if the current screen is mobile-sized
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        const data = response.data;
        if (Array.isArray(data)) {
          console.log(data);
          setProducts(data);
        } else {
          console.error("Unexpected data structure:", data);
        }
      } catch (err) {
        console.error("Error fetching product data:", err);
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    if (isMobile) {
      setIsMobileDetailView(true); // Show detail view on mobile
    }
  };

  const handleBackClick = () => {
    setIsMobileDetailView(false); // Go back to the product list on mobile
    setSelectedProduct(null); // Reset selected product
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        padding: 0,
        margin: 0,
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        {/* Show ProductList if not in mobile detail view or on larger screens */}
        {(!isMobile || !isMobileDetailView) && (
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              backgroundColor: "#ffffff",
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              padding: 2,
              boxSizing: "border-box",
            }}
          >
            <ProductList
              products={products}
              onProductSelect={handleProductSelect}
            />
          </Grid>
        )}

        {/* Always show ProductDetail on larger screens, and conditionally on mobile */}
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            backgroundColor: "#ffffff",
            height: "100%",
            padding: 2,
            boxSizing: "border-box",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {isMobile && isMobileDetailView && (
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
            >
              <IconButton onClick={handleBackClick}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" sx={{ marginLeft: 1 }}>
                Back
              </Typography>
            </Box>
          )}
          <ProductDetail product={selectedProduct} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;

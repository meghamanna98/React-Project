import React from "react";
import { Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProductDetail = ({ product }) => {
  if (!product) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full height of the viewport
          textAlign: "center",
          width: "100%", // Full width of the panel
          margin: 0, // Remove margin
          padding: 0, // Remove padding
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#4B0082", fontSize: "1rem", marginBottom: 1 }}
        >
          Nothing to display...
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Select an item to display
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#4F4F4F", fontSize: "0.875rem", maxWidth: "400px" }}
        >
          Select an item from the master view to display details in the detail
          view.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          width: "100%", // Full width
          maxWidth: "100%", // Maximum width for responsiveness
          height: "600px", // Fixed height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#f0f0f0", // Light gray background
          borderRadius: "6px", // Border radius for rounded corners
          border: "1px solid #dcdcdc", // Light gray border
          padding: "8px", // Add some padding around the image
          boxSizing: "border-box", // Include padding and border in the element's total width and height
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // Maintain aspect ratio and prevent cropping
          }}
        />
      </Box>
        <Typography
          variant="body1" // Use larger variant
          sx={{ color: "#4B0082", marginBottom: 1 }}
        >
          {product.category[0].toUpperCase() + product.category.slice(1)}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          {product.description}
        </Typography>
        <Box display="flex" alignItems="center" sx={{ marginBottom:1 }}>
          {[...Array(Math.round(product.rating.rate))].map((_, index) => (
            <StarIcon key={index} sx={{ color: "#FFD700" }} />
          ))}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginLeft: 1 }}
          >
            {product.rating.rate} ({product.rating.count} reviews)
          </Typography>
        </Box>
        <Typography variant="h5" color="primary" sx={{ marginBottom: 2 }}>
          ${product.price}
        </Typography>
    </>
  );
};

export default ProductDetail;

import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

const ProductList = ({ products, onProductSelect }) => {
  if (!products || products.length === 0) {
    return (
      <Typography
        variant="h6"
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full height of the viewport
          textAlign: "center",
        }}
      >
        No products available
      </Typography>
    );
  }

  return (
    <List sx={{ padding: 0, margin: 0 }}>
      {products.map((product) => (
        <ListItem
        key={product.id}
        onClick={() => onProductSelect(product)}
        sx={{
          borderBottom: "1px solid #e0e0e0",
          "&:hover": { backgroundColor: "#f5f5f5" },
          padding: 1, // Increase padding for larger size
          display: "flex",
          alignItems: "center",
          borderRadius: 3, // Larger rounded corners
          marginBottom: 2, // Increase gap between items
          backgroundColor: "#ffffff", // Background color of each item
          border: "1px solid #dcdcdc", // Thin border color
        }}
      >
          <ListItemAvatar>
            <Avatar
              variant="square"
              src={product.image}
              alt={product.title}
              sx={{
                width: 60, // Increase image size
                height: "auto", // Maintain aspect ratio
                maxHeight: 100, // Adjust max height
                maxWidth: 100, // Adjust max width
                backgroundSize: "contain", // Preserve the aspect ratio and prevent cropping
              }}
            />
          </ListItemAvatar>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              marginLeft: 20, // Increase margin between image and text
            }}
          >
            <Typography
              variant="body1" // Use larger variant
              sx={{ color: "#4B0082", marginBottom: 0.7 }}
            >
              {product.category[0].toUpperCase() + product.category.slice(1)}
            </Typography>
            <Typography
              variant="subtitle1" // Use h10 equivalent size
              sx={{
                fontWeight: "bold",
                overflow: "hidden",
                whiteSpace: "normal", // Allow wrapping
                wordWrap: "break-word", // Ensure the title wraps within the box
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                marginBottom: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 1, // Show only the first line of the description
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.description}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#000",
                marginTop: 0.7,
                whiteSpace: "nowrap",
              }}
            >
              ${product.price}
            </Typography>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;

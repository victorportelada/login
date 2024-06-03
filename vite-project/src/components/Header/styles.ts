import { styled } from "@stitches/react";

export const StyledHeader = styled("header", {
  backgroundColor: "#282c34",
  padding: "10px",
  nav: {
    display: "flex",
    justifyContent: "space-around",
    a: {
      color: "white",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
});
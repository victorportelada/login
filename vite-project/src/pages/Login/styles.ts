import { styled } from "@stitches/react";

const StyledLogin = styled("div", {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#f0f0f0",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  h1: {
    marginBottom: "20px",
  },
  ".formulario": {
    form: {
      display: "flex",
      flexDirection: "column",
      input: {
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        "&:focus": {
          outline: "none",
          borderColor: "#007bff",
               },
            },
        button: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#0056b3",
            },
        }
    }
    }, 
})

export default StyledLogin
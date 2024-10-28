import React from "react";
import { Box } from "@mui/material"; // Importando o Box do Material UI
import TextoDelivery from "../../assets/texto-delivery.png";

function LogoText() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",  // Altura do container
      }}
    >
      <img src={TextoDelivery} alt="Texto Delivery" style={{ height: "200px" }} />
    </Box>
  );
}

export default LogoText;

import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const BarraDeBusca = () => {
  const theme = useTheme(); // Acessar o tema atual
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: theme.spacing(2),
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Buscar..."
        sx={{
          width: "100%",
          maxWidth: 600, // Definir uma largura máxima
          backgroundColor: "transparent", // Barra transparente
          borderRadius: theme.shape.borderRadius,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
            borderColor: "white", // Cor ao passar o mouse
            },      
            "&:hover fieldset": {
              borderColor: '#FFF', // Cor ao passar o mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: '#fff', // Cor ao focar
            },
          },
          input: {
            color: theme.palette.text.primary, // Cor do texto
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#fff"}} /> {/* Ícone de busca */}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default BarraDeBusca;

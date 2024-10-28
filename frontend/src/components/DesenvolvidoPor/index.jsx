import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LogoEmpresa from '../../assets/raccoonDark.png'
import { useTheme } from '@mui/material/styles'; // Importar o useTheme

function DesenvolvidoPor() {
const theme = useTheme(); // Acessar o tema

  return (
    <Box
      sx={{
        color: '#fff',
        padding: '5px 0',
        textAlign: 'center',
        bottom:5
      }}
    >
      <Grid container  justifyContent="center">

    

        {/* Desenvolvido por */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',            // Usamos flexbox para alinhar lado a lado
            alignItems: 'center',        // Centraliza verticalmente
            justifyContent: 'center',    // Centraliza horizontalmente
            borderRadius: '8px',         // Cantos arredondados para estilo
          }}
        >
          <Typography
            variant="body2"
            color="#fff"                 // Texto branco para contraste
          >
            Desenvolvido por
          </Typography>
          <Box
            component="img"
            src={LogoEmpresa}
            alt="Logo da Empresa"
            sx={{ width: '150px', height: 'auto' }} // Tamanho ajustado da logo
          />
        </Grid>
      
      </Grid>   
    </Box>
  );
}

export default DesenvolvidoPor;

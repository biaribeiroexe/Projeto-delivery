import React from 'react';
import { Button, Box } from '@mui/material'; // Importa componentes do Material UI

function MenuItens() {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: "100vw",
        padding: '10px',
        overflowX: "auto",
      }}
    >
      <Button variant="contained" color="primary" sx={styles.button}>
        Hamburgueres
      </Button>
      <Button variant="contained" color="primary" sx={styles.button}>
        Sanduiches
      </Button>
      <Button variant="contained" color="primary" sx={styles.button}>
        Bebidas
      </Button>
      <Button variant="contained" color="primary" sx={styles.button}>
        Combos
      </Button>
    </Box>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    margin: '0 2px',
    borderRadius: '20px', // Cantos arredondados

  },
};

export default MenuItens;

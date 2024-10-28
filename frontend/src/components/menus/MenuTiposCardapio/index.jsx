import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import SushiIcon from '@mui/icons-material/Fastfood'; // Substitua por um ícone de sushi apropriado
import SaladIcon from '@mui/icons-material/EmojiFoodBeverage'; // Ícone de salada
import CakeIcon from '@mui/icons-material/Cake';

function MenuTiposCardapio() {
  const [selectedIndex, setSelectedIndex] = useState(0); // Estado para o item selecionado

  const items = [
    { title: 'Salada', icon: <SaladIcon fontSize="medium" /> }, // Tamanho ajustado para mobile
    { title: 'Sushi', icon: <SushiIcon fontSize="medium" /> },
    { title: 'Pizza', icon: <LocalPizzaIcon fontSize="medium" /> },
    { title: 'Bolos', icon: <CakeIcon fontSize="medium" /> },
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      {items.map((item, index) => (
        <Grid item xs={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
            onClick={() => handleSelect(index)}
            sx={{ 
              borderRadius: '50px', // Bordas mais arredondadas
              textAlign: 'center',
              padding: '10px', // Padding interno
              width: '90px', // Largura do card para mobile
              transition: 'background-color 0.3s ease', // Transição suave para a troca de cor
              backgroundColor: 'transparent', // Fundo transparente
              boxShadow: 'none' // Remover sombra
            }}
          >
            <CardContent sx={{ padding: '10px' }}>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '50px', // Largura reduzida do botão para mobile
                  height: '50px', // Altura reduzida do botão
                  padding: 0,
                  border: '2px solid white', // Borda circular branca
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto', // Centralizar o ícone
                  backgroundColor: 'transparent', // Fundo transparente
                }}
              >
                {item.icon}
              </IconButton>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  color: 'white', 
                  mt: 1, 
                  fontSize: '0.9rem', // Tamanho reduzido da fonte para mobile
                  lineHeight: 1.2,
                  textAlign: 'center' // Centralizar o nome
                }}
              >
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MenuTiposCardapio;

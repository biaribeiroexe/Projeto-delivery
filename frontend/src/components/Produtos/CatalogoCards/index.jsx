import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system';
import { useTheme } from '@emotion/react';

const items = [
  { title: 'Hamburguer', price: 'R$50', rating: 4.5, imageUrl: 'src/assets/produtos/2.png' },
  { title: 'Hamburguer', price: 'R$50', rating: 4.5, imageUrl: 'src/assets/produtos/3.png' },
  { title: 'Hamburguer', price: 'R$50', rating: 4.5, imageUrl: 'src/assets/produtos/4.png' },
  { title: 'Hamburguer', price: 'R$50', rating: 4, imageUrl: 'src/assets/produtos/5.png' },
  { title: 'Hamburguer', price: 'R$50', rating: 4.5, imageUrl: 'src/assets/produtos/2.png' },
  { title: 'Hamburguer', price: 'R$50', rating: 4.5, imageUrl: 'src/assets/produtos/3.png' },
];

const PriceBadge = styled('div')({
  position: 'absolute',
  top: 10,
  right: 10,
  color: '#ffffff',
  borderRadius: '25px',
  padding: '10px',
  fontWeight: 'bold',
  fontSize: '20px',
  border: '3px solid #fff',
});

const CatalogoItens = () => {
  const theme = useTheme();

  return (
    <Box padding={1}>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: theme.palette.grey[900], // Cor de fundo escura
                color: '#ffffff', // Texto branco
                position: 'relative',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', // Sombra mais suave
                overflow: 'hidden', // Para cortar bordas arredondadas no CardMedia
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.imageUrl}
                alt={item.title}
                sx={{
                  objectFit: 'cover', // Ajustar a imagem para cobrir todo o espaço
                }}
              />
              <PriceBadge sx={{ backgroundColor: theme.palette.emphasis.main }}>
                {item.price}
              </PriceBadge>
              <CardContent sx={{ padding: '16px', display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" component="div">
                  <StarIcon sx={{ verticalAlign: 'middle', color: '#fff700', mr: 0.5 }} />
                  {item.rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CatalogoItens;

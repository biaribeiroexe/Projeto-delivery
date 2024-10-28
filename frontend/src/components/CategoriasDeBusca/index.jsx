import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Importando as imagens
import Icon1 from "../../assets/icones2/1.png";
import Icon2 from "../../assets/icones2/2.png";
import Icon3 from "../../assets/icones2/3.png";
import Icon4 from "../../assets/icones2/4.png";
import Icon5 from "../../assets/icones2/5.png";
import Icon6 from "../../assets/icones2/6.png";

const categorias = [
    { nome: "Hamburgueres", icone: Icon2 },
    { nome: "Fritas", icone: Icon1 },
    { nome: "Combos", icone: Icon6 },
    { nome: "Pizzas", icone: Icon3 },
    { nome: "Bebida", icone: Icon4 },
    { nome: "Sobremesa", icone: Icon5 },
];

// Array de cores pasteurizadas
const colors = [
    "#FFDAA2", // Amarelo leitoso 1
    "#FF8C00", // Laranja vibrante
    "#FFCE54", // Amarelo claro
    "#FFF4E1", // Amarelo pálido
    "#FFD700", // Dourado
    "#FFB800", // Amarelo dourado
  ];
  
  

const Categorias = () => {
  const theme = useTheme(); // Acessar o tema

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: theme.spacing(2),
      }}
    >
      <Grid container spacing={2} maxWidth="600px">
        {categorias.map((categoria, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                backgroundColor: colors[index % colors.length], // Aplicando cor pastel
                
                textAlign: "left", // Alinhando texto à esquerda
                padding: theme.spacing(1), // Espaçamento interno
                transition: "transform 0.3s ease", // Efeito de zoom ao passar o mouse
                "&:hover": {
                  transform: "scale(1.05)", // Zoom suave no hover
                },
              }}
            >
              <CardContent>
                {/* Ícone e Nome da Categoria Lado a Lado */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center", // Ícone e texto alinhados verticalmente
                  }}
                >
                  {/* Imagem da categoria */}
                  <Box
                    component="img"
                    src={categoria.icone}
                    alt={categoria.nome}
                    sx={{
                      width: "auto", // Tamanho fixo do ícone
                      height: "70px", // Tamanho fixo do ícone
                      marginRight: theme.spacing(2), // Espaçamento entre ícone e texto
                      position: "relative", // Para manter posição fixa
                    }}
                  />
                  {/* Nome da categoria */}
                  <Typography
                    variant="h6"
                    color="#1b1b1b"
                  >
                    {categoria.nome}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categorias;

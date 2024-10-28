import React from "react";
import {
  Box,
  Card,
  CardContent,
  Link,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PedidoAtual from "./PedidoAtual";

// Ícones do Material-UI
import HistoryIcon from "@mui/icons-material/History";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function HistoricoPedidos() {
  const theme = useTheme();

  // Lista de pedidos de hambúrguer com status
  const pedidos = [
    {
      id: 1,
      data: "23/10/2024",
      resumo: "Pedido de 2 Cheeseburgers, 1 batata frita",
      status: "confirmado",
    },
    {
      id: 2,
      data: "15/10/2024",
      resumo: "Pedido de 1 Bacon Burger, 1 batata frita",
      status: "cancelado",
    },
    {
      id: 3,
      data: "05/10/2024",
      resumo: "Pedido de 3 Double Burgers",
      status: "confirmado",
    },
  ];

  // Função para renderizar ícone de status baseado no status do pedido
  const renderStatusIcon = (status) => {
    switch (status) {
      case "confirmado":
        return (
          <CheckCircleIcon
            sx={{ color: theme.palette.success.main, marginRight: theme.spacing(1) }}
          />
        );
      case "cancelado":
        return (
          <CancelIcon
            sx={{ color: theme.palette.error.main, marginRight: theme.spacing(1) }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: theme.spacing(2) }}>
      {/* Seção do pedido atual */}
      <PedidoAtual />

      {/* Histórico de pedidos anteriores */}
      <Typography
        variant="h6"
        sx={{
          marginBottom: theme.spacing(2),
          display: "flex",
          alignItems: "center",
          fontSize: "1.1rem", // Ajustando tamanho para mobile
        }}
      >
        <HistoryIcon sx={{ marginRight: theme.spacing(1) }} />
        Histórico de Pedidos
      </Typography>

      {pedidos.map((pedido) => (
         <Link
         href={`/detalhes-pedido/${pedido.id}`}
         underline="hover"
         sx={{
           display: "block",
    
           textAlign: "center",
           fontSize: "0.8rem", // Ajuste para mobile
         }}
       >
        <Card key={pedido.id} sx={{ marginBottom: theme.spacing(2),   backgroundColor: 'transparent' }} >
          <CardContent>
            <Box display="flex" alignItems="center" mb={1}>
              {renderStatusIcon(pedido.status)}
              <Typography variant="body2">{pedido.data}</Typography>
            </Box>

            <Typography variant="body1" sx={{ marginBottom: theme.spacing(1) }}>
              {pedido.resumo}
            </Typography>

            {/* Grid para botões e link responsivos */}
            <Grid container spacing={1} alignItems="center">
              {/* Botão Adicionar à Sacola */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  fullWidth
                 
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    fontSize: "0.8rem", // Tamanho de fonte menor para mobile
                    padding: theme.spacing(1), // Ajuste de padding
                    boxShadow: "none",
                    mt:2
                  }}
                >
                  Adicionar à Sacola
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  startIcon={<HelpOutlineIcon />}
                  fullWidth
                  color="#fff"
                  sx={{
                    
                    fontSize: "0.8rem", // Tamanho de fonte menor para mobile
                    padding: theme.spacing(1), // Ajuste de padding
                  }}
                >
                  Obter Ajuda Sobre o Pedido
                </Button>
              </Grid>
      
         
            </Grid>
          </CardContent>
        </Card>
        </Link>
      ))}
    </Box>
  );
}

export default HistoricoPedidos;

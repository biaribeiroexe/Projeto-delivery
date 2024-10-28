import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Importando useTheme

const pedidos = [
  {
    id: 1,
    status: "Em preparação",
    items: [
      { nome: "Cheeseburger", quantidade: 1 },
      { nome: "Batata Frita", quantidade: 1 },
      { nome: "Refrigerante", quantidade: 1 }
    ],
    endereco: "Rua Exemplo, 123",
    tempoEstimado: "30 minutos",
    total: "R$ 35,00"
  },
  {
    id: 2,
    status: "Entregue",
    items: [
      { nome: "Pizza", quantidade: 1 },
      { nome: "Cerveja", quantidade: 2 }
    ],
    endereco: "Avenida Exemplo, 456",
    tempoEstimado: "45 minutos",
    total: "R$ 70,00"
  },
  // Adicione mais pedidos conforme necessário
];

const DetalhesPedidoIndividual = () => {
  const { id } = useParams();
  const pedido = pedidos.find(p => p.id === parseInt(id));
  const theme = useTheme(); // Usando o tema

  if (!pedido) {
    return <Typography variant="h6">Pedido não encontrado</Typography>;
  }

  return (
    <Box sx={{ margin: 3, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Detalhes do Pedido #{pedido.id}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Status: {pedido.status}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Itens:
      </Typography>
      <ul>
        {pedido.items.map((item, index) => (
          <li key={index}>
            {item.quantidade} x {item.nome}
          </li>
        ))}
      </ul>
      <Typography variant="body1">
        Endereço de entrega: {pedido.endereco}
      </Typography>
      <Typography variant="body1">
        Tempo estimado de entrega: {pedido.tempoEstimado}
      </Typography>
      <Typography variant="h6">
        Total: {pedido.total}
      </Typography>
      <Button
        variant="contained"
        mb={2} // Aumentando o espaço inferior
        color="success"
        sx={{
          boxShadow: "none", // Corrigido para 'none'
          borderColor: theme.palette.emphasis.main, // Usando o tema
        }}
        fullWidth
      >
        Confirmar Entrega
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: theme.palette.text.primary, // Usando a cor do texto do tema
          borderColor: theme.palette.error.main, // Usando a cor de erro do tema
          mt: 1,
        }}
        fullWidth
      >
        Problemas com meu pedido
      </Button>
    </Box>
  );
};

export default DetalhesPedidoIndividual;

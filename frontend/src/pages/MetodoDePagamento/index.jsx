import React from "react";
import {
  Box,
  Button,
  List,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import TituloPaginas from "../../components/TituloPaginas";

const ListaMetodosDePagamento = () => {
  const navigate = useNavigate();
  const metodos = [
    { id: 1, cardType: "Cartão de Crédito", cardHolder: "Bia", cardNumber: "**** **** **** 1234" },
    { id: 2, cardType: "Cartão de Débito", cardHolder: "Bia", cardNumber: "**** **** **** 5678" },
  ];

  const handleAddPaymentMethod = () => {
    navigate("/novo-metodo-pagamento");
  };

  const handleEdit = (id) => {
    // Função para edição
    console.log("Editar", id);
  };

  const handleDelete = (id) => {
    // Função para exclusão
    console.log("Excluir", id);
  };

  return (
    <Box sx={{ p: 3 }}>
      <TituloPaginas titulo="Métodos de Pagamento" />

      <List>
        {metodos.map((metodo) => (
          <Card
            key={metodo.id}
            variant="outlined"
            sx={{ mb: 2, borderRadius: 1 }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemAvatar>
                  <CreditCardIcon fontSize="large" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" color="text.primary">
                        {metodo.cardType}
                      </Typography>
                      <br />
                      <Typography component="span" color="text.primary">
                        {metodo.cardNumber}
                      </Typography>
                    </>
                  }
                  secondary={metodo.cardHolder}
                  primaryTypographyProps={{ color: "text.primary" }}
                  secondaryTypographyProps={{ color: "text.secondary" }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
               
                <Button
                  variant="text"
                  
                  startIcon={<DeleteIcon size="large"/>}
                  onClick={() => handleDelete(metodo.id)}
                >
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddPaymentMethod}
        sx={{ mt: 3, boxShadow: "none" }}
        fullWidth
      >
        Adicionar Novo Método
      </Button>
    </Box>
  );
};

export default ListaMetodosDePagamento;

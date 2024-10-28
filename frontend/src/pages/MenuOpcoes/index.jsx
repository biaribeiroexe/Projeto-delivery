import React from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import ChatIcon from "@mui/icons-material/Chat";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DesenvolvidoPor from "../../components/DesenvolvidoPor";
import { Link } from "react-router-dom";
import UserProfileCard from "../Usuario/CardPerfil";
import TituloPaginas from "../../components/TituloPaginas";

const MenuOpcoes = () => {
  const user = {
    name: "Bia",
    photo: "B",
    currentAddress: "Rua das Bobos, 0",
  };
  return (
    <Box
      sx={{ position: "relative", minHeight: "80vh", paddingBottom: "80px" }}
    >

      {/* Card com as informações do usuário */}
      <UserProfileCard user={user} />

      {/* Opções de menu */}
      <List component="nav" aria-label="user options">
      <Link
          to="/metodo-pagamento"
          style={{ textDecoration: "none", color: "inherit" }}
        >
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Métodos de Pagamento" />
        </ListItem>
        </Link>
        <Divider />

        <ListItem button>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Endereços" />
        </ListItem>

        <Divider />
        <Link
          to="/dados-conta"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Dados da Conta" />
          </ListItem>
        </Link>
        <Divider />
      </List>
      {/* Botão de Sair */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<ExitToAppIcon />}
        fullWidth
        sx={{ marginTop: "16px" }}
      >
        Sair
      </Button>
      {/* Desenvolvido Por posicionado no bottom */}
      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <DesenvolvidoPor />
      </Box>
    </Box>
  );
};

export default MenuOpcoes;

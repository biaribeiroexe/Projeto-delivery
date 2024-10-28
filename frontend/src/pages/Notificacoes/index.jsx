import React from "react";
import {
  Badge,
  Box,
  Chip,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import CakeIcon from "@mui/icons-material/Cake";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import TituloPaginas from "../../components/TituloPaginas";

const dadosNotificacoes = [
  {
    id: 1,
    mensagem: "Seu pedido de pizza está a caminho!",
    icone: <LocalPizzaIcon />,
    novo: true,
  },
  {
    id: 2,
    mensagem: "Seu hambúrguer foi entregue.",
    icone: <FastfoodIcon />,
    novo: false,
  },
  {
    id: 3,
    mensagem: "Seu bolo de aniversário será entregue em breve.",
    icone: <CakeIcon />,
    novo: true,
  },
  {
    id: 4,
    mensagem: "A sua ordem de batatas fritas foi confirmada.",
    icone: <ClearAllIcon />,
    novo: false,
  },
];

const Notificacoes = () => {
  const theme = useTheme();
  return (
    <Container>
      <TituloPaginas titulo="Notificações" />
      <Box sx={{ marginTop: 2 }}>
        <List>
          {dadosNotificacoes.map((notificacao) => (
            <ListItem key={notificacao.id} sx={{ padding: 1 }}>
              <ListItemAvatar>
                <Badge
                  variant="dot"
                  invisible={!notificacao.novo}
                  color="primary"
                >
                  {notificacao.icone}
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary={notificacao.mensagem}
                secondary={notificacao.novo && (
                  <Chip
                    label="Nova"
                    sx={{
                      backgroundColor: theme.palette.emphasis.main,
                      color: "#121212",
                    }}
                    size="small"
                  />
                )}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Notificacoes;

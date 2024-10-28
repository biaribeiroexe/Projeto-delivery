import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";
import {
  AttachMoney as AttachMoneyIcon,
  ExpandMore as ExpandMoreIcon,
  Fastfood as FastfoodIcon,
  LocationOn as LocationOnIcon,
  Timer as TimerIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const PedidoAtual = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        marginBottom: theme.spacing(3),
        borderRadius: "8px",
        backgroundColor: "transparent",
      }}
      onClick={handleExpandClick}
      aria-expanded={expanded}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between" // Espaçar entre a imagem e o conteúdo
          alignItems="center"
        >
          {/* Título e conteúdo, ocupando o lado direito */}
          <Box sx={{ flexGrow: 1, marginLeft: theme.spacing(1) }}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
             
                fontWeight: "bold",
              }}
            >
              <FastfoodIcon
                sx={{
                  marginRight: theme.spacing(1),
           
                }}
              />
              Pedido Atual
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: theme.spacing(1) }}>
              Status:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: theme.palette.warning.main,
                }}
              >
                Em preparação
              </span>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: theme.spacing(2) }}>
              Pedido: 1 Cheeseburger com batata frita e refrigerante
            </Typography>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box
                sx={{
                  marginTop: theme.spacing(2),
                  padding: theme.spacing(1),
                  borderRadius: "4px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: theme.spacing(1),
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      marginRight: theme.spacing(1),
                      color: theme.palette.info.main,
                    }}
                  />
                  Endereço de entrega: Rua Exemplo, 123
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: theme.spacing(1),
                  }}
                >
                  <TimerIcon
                    sx={{
                      marginRight: theme.spacing(1),
                      color: theme.palette.success.main,
                    }}
                  />
                  Tempo estimado de entrega:{" "}
                  <span style={{ fontWeight: "bold" }}>30 minutos</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: theme.spacing(1),
                  }}
                >
                  <AttachMoneyIcon
                    sx={{
                      marginRight: theme.spacing(1),
                      color: theme.palette.error.main,
                    }}
                  />
                  Total: <span style={{ fontWeight: "bold" }}>R$ 35,00</span>
                </Typography>
                <Button
                  variant="contained"
                 
                  sx={{
                    backgroundColor: theme.palette.emphasis.main,
                    boxShadow: "None",
                    mt:2,
                    borderColor: theme.palette.emphasis.main,
                  }}
                  fullWidth
                >
                  Confirmar Entrega
                </Button>
                <Button variant="outlined" sx={{ mt: 1 }} color="#fff" fullWidth>
                  Problemas com meu pedido
                </Button>
              </Box>
            </Collapse>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PedidoAtual;

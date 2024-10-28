import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Ícone de Notificação
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Ícone de Voltar
import { useTheme } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importa Link e useLocation

function HeaderPrincipal() {
  const theme = useTheme();
  const location = useLocation(); // Obtém a localização atual
  const navigate = useNavigate(); // Hook para navegação

  const isHomePage = location.pathname === '/' || 
                     location.pathname === '/menu-opcoes' ||
                     location.pathname === '/historico-pedidos'; // Verifica se está na página principal

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: 'white',
        borderBottom: `2px solid ${theme.palette.primary.main}`, // Borda inferior primária
        transition: 'background-color 0.3s ease', // Transição suave ao rolar
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Ícone de Voltar, exibido se não estiver na página principal */}
        {!isHomePage && (
          <IconButton color="inherit" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        )}

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            (61) 3633 - 3333
          </Typography>
        </Box>

        {/* Link para Notificações com Badge à direita */}
        <Link to="/notificacoes" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <Badge 
              badgeContent={1} // Número de notificações
              color="error" 
              sx={{
                '& .MuiBadge-dot': {
                  backgroundColor: theme.palette.emphasis.main, // Cor do badge
                },
              }}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderPrincipal;

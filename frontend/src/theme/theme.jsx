import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Define que o tema será no modo dark
    primary: {
      main: '#ff8c00',  // Laranja suave para cor primária
    },
    secondary: {
      main: '#ffc107',  // Amarelo dourado para cor secundária
    },
    emphasis: {
      main: '#00BCD4',  
    },
    background: {
      default: '#121212',  // Preto quase total para fundo
      paper: '#1e1e1e',    // Cinza escuro para superfícies (cards, etc.)
    },
    text: {
      primary: '#e0e0e0',  // Cinza claro para texto principal
      secondary: '#b0b0b0',  // Cinza suave para texto desabilitado
    },
    success: {
      main: '#4caf50',  // Verde para mensagens de sucesso
    },
    error: {
      main: '#f44336',  // Vermelho para mensagens de erro
    },
    divider: '#333333',  // Cinza escuro para bordas e divisores
  },
  spacing: 8, // Define o espaçamento base. Cada unidade corresponde a 8px.
  shape: {
    borderRadius: 16, // Arredondamento padrão de botões, cards, etc. (aqui, 16px)
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(255, 255, 255, 0.12), 0px 1px 2px rgba(255, 255, 255, 0.24)', // Shadow suave para níveis baixos
    '0px 3px 6px rgba(255, 255, 255, 0.16), 0px 3px 6px rgba(255, 255, 255, 0.23)', // Shadow para cards
    '0px 10px 20px rgba(255, 255, 255, 0.19), 0px 6px 6px rgba(255, 255, 255, 0.23)', // Shadow mais forte
    // Adicione mais sombras conforme necessário
  ],
  
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;

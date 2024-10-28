import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HeaderPrincipal from './components/menus/MenuPrincipal';
import MenuFooter from './components/menus/menuFooter';
import MenuOpcoes from './pages/MenuOpcoes';
import HistoricoPedidos from './pages/HistoricoPedidos';
import { Box } from '@mui/material';
import DetalhesPedidoIndividual from './pages/HistoricoPedidos/DetalhesPedidoIndividual';
import Busca from './pages/Busca';
import DadosDaConta from './pages/Usuario/DadosDaConta';
import Notificacoes from './pages/Notificacoes';
import MetodoPagamento from './pages/MetodoDePagamento/NovoMetodo';
import ListaMetodosDePagamento from './pages/MetodoDePagamento';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Header Principal sempre visível */}
        <HeaderPrincipal />
        {/* Conteúdo principal com margem superior e inferior */}
        <Box sx={{ marginTop: 1, marginBottom: 8 }}> {/* Ajuste a margem conforme necessário */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu-opcoes" element={<MenuOpcoes />} />
            <Route path="/historico-pedidos" element={<HistoricoPedidos />} />
            <Route path="/detalhes-pedido/:id" element={<DetalhesPedidoIndividual />} />
            <Route path="/busca" element={<Busca />} />
            <Route path="/dados-conta" element={<DadosDaConta />} />
            <Route path="/notificacoes" element={<Notificacoes/>} />
            <Route path="/metodo-pagamento" element={<ListaMetodosDePagamento/>} />
            <Route path="/novo-metodo-pagamento" element={<MetodoPagamento/>} />

          </Routes>
        </Box>
        {/* Footer sempre visível */}
        <MenuFooter />
      </ThemeProvider>
    </Router>
  );
}

export default App;

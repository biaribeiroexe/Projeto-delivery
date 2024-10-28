import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, AppBar, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ConfirmacaoSaida = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmação</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza que deseja sair desta página?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Sair
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const PaginaComConfirmacao = () => {
  const theme = useTheme();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleSairClick = () => {
    setConfirmOpen(true);
  };

  const handleClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirm = () => {
    // Aqui você pode adicionar a lógica de saída, como redirecionar ou limpar o estado
    console.log('Usuário saiu da página');
    setConfirmOpen(false);
  };

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.default,
          color: 'white',
          borderBottom: `2px solid ${theme.palette.primary.main}`, // Borda inferior primária
          transition: 'background-color 0.3s ease', // Transição suave ao rolar
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Página com Confirmação
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ padding: theme.spacing(2) }}>
        <Button variant="contained" color="warning" onClick={handleSairClick}>
          Sair da Página
        </Button>

        {/* Componente de confirmação */}
        <ConfirmacaoSaida 
          open={confirmOpen} 
          onClose={handleClose} 
          onConfirm={handleConfirm} 
        />
      </div>
    </div>
  );
};

export default PaginaComConfirmacao;

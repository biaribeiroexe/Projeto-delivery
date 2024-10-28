import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DesenvolvidoPor from "../../../components/DesenvolvidoPor";

const DadosDaConta = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Bia",
    email: "bia@example.com",
    phone: "(11) 98765-4321",
    currentAddress: "Rua das Bobos, 0",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Avatar alt={user.name} sx={{ width: 80, height: 80, marginRight: 2 }}>
          {user.name[0]}
        </Avatar>
        <Box>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 2 }} />

      <Box component="form">
        <TextField
          label="Nome"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          disabled={!isEditing}
        />
        <TextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          disabled={!isEditing}
        />
        <TextField
          label="Telefone"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          disabled={!isEditing}
        />
        <TextField
          label="Endereço"
          name="currentAddress"
          value={user.currentAddress}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          disabled={!isEditing}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
        onClick={handleEditToggle}
        sx={{ marginTop: 2 }}
        fullWidth
      >
        {isEditing ? "Salvar" : "Editar"}
      </Button>

      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <DesenvolvidoPor />
      </Box>
    </Box>
  );
};

export default DadosDaConta;

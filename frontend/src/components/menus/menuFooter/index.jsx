import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importando motion

const MenuFooter = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          icon={
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <HomeOutlinedIcon />
              </motion.div>
            </Link>
          }
        />
        <BottomNavigationAction
          label="Busca"
          icon={
            
            <Link to="/busca" style={{ textDecoration: "none", color: "inherit" }}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <SearchOutlinedIcon />
            </motion.div>
          </Link>
          }
        />
        <BottomNavigationAction
          label="Pedidos"
          icon={
            <Link to="/historico-pedidos" style={{ textDecoration: "none", color: "inherit" }}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <ListAltOutlinedIcon />
              </motion.div>
            </Link>
          }
        />
        <BottomNavigationAction
          label="Mais"
          icon={
            <Link to="/menu-opcoes" style={{ textDecoration: "none", color: "inherit" }}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <MoreHorizOutlinedIcon />
              </motion.div>
            </Link>
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default MenuFooter;

import React from 'react';
import { Box } from '@mui/material'; // Importando Box do Material UI
import LogoText from '../components/Textos/logoText';
import BannerDoisHP from '../components/Banners/Banner2HP/index.jsx';
import MenuTiposCardapio from '../components/menus/MenuTiposCardapio/index.jsx';
import CatalogoCards from '../components/Produtos/CatalogoCards/index.jsx';

function Home() {
  return (
    <Box p={1} sx={{background: `linear-gradient(135deg, #121212 0%, #646464 100%)`, backgroundSize: "80vh",}}>
      <Box sx={{ mt: 2 }}> {/* Margem superior para espaçamento */}
        <LogoText />
      </Box>
      <Box sx={{ mt: 2 }}> {/* Margem superior para espaçamento */}
        <BannerDoisHP />
      </Box>
      <Box sx={{mt:2}}>
        <MenuTiposCardapio/>
      </Box>
      <Box sx={{mt:2}}>
          <CatalogoCards/>
        </Box>
    </Box>
  );
}

export default Home;

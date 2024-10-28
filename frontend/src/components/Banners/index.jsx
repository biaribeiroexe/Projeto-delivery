import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Button, Collapse, useTheme } from '@mui/material';

function BannerHP({ image, buttonText, onClickPromo }) {
  const theme = useTheme()
  const [showPromo, setShowPromo] = useState(false);

  const handleMouseEnter = () => {
    setShowPromo(true);
  };

  const handleMouseLeave = () => {
    setShowPromo(false);
  };

  return (
    <Card 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      sx={{  overflow: 'hidden', transition: 'transform 0.3s', boxShadow: theme.shadows[1]}}
  
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Banner Promoção"
      />

      {/* Botão que aparece ao passar o mouse */}
      {/* <Collapse in={showPromo} timeout="auto" unmountOnExit>
        <div 
          style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            backgroundColor: '#ff8c00', // Cor primária
            padding: '10px', 
            textAlign: 'center' 
          }}
        >
          <Button 
            variant="contained" 
            color="primary" 
            onClick={onClickPromo}
            sx={{ width: '100%' }} // O botão ocupa toda a largura do card
          >
            {buttonText}
          </Button>
        </div>
      </Collapse> */}
    </Card>
  );
}

export default BannerHP;

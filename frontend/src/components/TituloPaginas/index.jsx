import { AppBar, Toolbar, Typography , Divider} from '@mui/material'
import React from 'react'

function TituloPaginas({titulo}) {
  return (
    <AppBar position="static" sx={{background:"transparent"}}>
    <Toolbar>
      <Typography variant="h6">{titulo}</Typography>
    </Toolbar>
    <Divider sx={{ mb: 2 , backgroundColor: "#ffffff"}} />
  </AppBar>
  )
}

export default TituloPaginas
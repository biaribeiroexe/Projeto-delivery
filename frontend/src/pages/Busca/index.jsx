import React from 'react'
import BarraDeBusca from '../../components/BarraDeBusca'
import CategoriasDeBusca from '../../components/CategoriasDeBusca'
import TituloPaginas from '../../components/TituloPaginas'
import { Box } from '@mui/material'

function Busca() {
  return (
    <Box>
    <BarraDeBusca/>
    <CategoriasDeBusca/>
    </Box>
  )
}

export default Busca
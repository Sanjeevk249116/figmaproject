import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Charts from './Charts'

function ChartsPart() {
  return (
    <Box px={'24px'} className='chart1'>
  <Text className='text1'>Emission/Revenue</Text> 
  <Charts/>
    </Box>
  )
}

export default ChartsPart

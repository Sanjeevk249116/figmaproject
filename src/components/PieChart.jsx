import React from 'react'
import Pies from './Pies'
import Tables from './Tables'
import { Flex } from '@chakra-ui/react'

function PieChart() {
  return (
    <Flex style={{marginTop:"16px" , marginLeft:"22px"}} >
      
        <Pies/>
        <Tables/>
    </Flex>
  )
}

export default PieChart

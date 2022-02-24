import React from 'react'
import Box from '../Components/Library/Box'

function Home() {
  return (
    <Box
    bg='inputBlue'
    width = '100%'
    height = '100vh'
    display= 'flex'
    justifyContent = 'center'
    alignItems = 'center'
    fontSize = '2rem'
    flexDirection = 'column'
    >
      <Box>You may start here.</Box>
      <Box>Bon Voyage!✌</Box>
    </Box>
  )
}

export default Home
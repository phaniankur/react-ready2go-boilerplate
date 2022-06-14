import React from 'react'
import Box from '../Library/Box'
import { Text } from '../Library/Text'

const Navbar = ({bg, Heading, children}) => {
  return (
    <Box
    bg={bg}
    minHeight='100vh'
    margin='0'
    padding ='0'
    >
      <Box
      bg='#85a18e'
      minHeight='3.5rem'
      display='flex'
      justifyContent='space-between'
      alignItems= 'center'
      pl='2rem'
      pr='2rem'
      color='#fff'
      // opacity= '0.4'
      >
        <Text as='h2' fontWeight= '500'>
          {Heading}
        </Text>
        <Box>
          <Text as='h3' fontWeight= '500'>
            Sign In/Register
          </Text>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  )
}

export default Navbar
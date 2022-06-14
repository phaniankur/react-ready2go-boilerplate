import React from 'react'
import Box from '../Components/Library/Box'
import Navbar from '../Components/Navbar/Index'
import SinglePost from '../Components/SinglePost/SinglePost'
import UserInfo from '../Components/UserInfoSidebar/UserInfo'

function Home() {
  return (
    <Navbar
    bg='bgPrimary'
    Heading = 'My Journal'
    >

    <Box
    display='flex'
    justifyContent='space-between'
    pl='2rem'
    pr='2rem'
    mt='2rem'
    gap='1rem'
    >
      <Box
      width='60%'
      >
        <SinglePost/>
      </Box>
      <Box
        width='40%'
        // bg='red'
      >
        <UserInfo/>
      </Box>
    </Box>
    </Navbar>
  )
}

export default Home
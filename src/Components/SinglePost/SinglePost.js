import React, { useState } from 'react'

import Box from '../Library/Box'
import { Text } from '../Library/Text'

import imageDP from '../../images/dp-main.jpeg'

const SinglePost = () => {
    const [Like, setLike] = useState(false)
  return (
    <Box
    bg='postBackground'
    borderRadius='10px'
    p='1rem'
    boxShadow="postShadow"
    // maxWidth='60rem'
    mb='1rem'
    >
        <Box
        display='flex'
        alignItems='center'
        >
            <Box
            borderRadius='50%'
            // border='1px solid red'
            height='3rem'
            width='3rem'
            position='relative'
            overflow='hidden'
            >
                <img src={imageDP} alt='dpmain' style={{maxHeight:'100%', maxWidth:'100%', objectFit: 'contain'}}/>
            </Box>
            <Box
            ml='0.5rem'
            >
                <Text fontWeight='bold'  >ankurphani</Text>
                <Text>Music Producer</Text>
            </Box>
        </Box>
        <Box
        mt='1rem'
        >
            <Text
            lineHeight='1.5rem'
            >
            Many people think that
            @elonmusk
            runs my Twitter account. And it's TRUE. He's a super busy guy, building rockets, making life multiplanetary, building futuristic electric vehicles, digging tunnels. And somehow he finds time to run multiple Twitter account. YES 🤣
            </Text>
        </Box>
        <Box
        mt='1rem'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        >

            <Box
            display='flex'
            gap='2rem'
            >
                <Box
                mr='2rem'>
                    {Like?
                    <svg style={{height:'30px', width: '30px'}} onClick={()=> setLike(!Like)}>
                        <use  xlinkHref={`/sprite.svg#fire-icon-yellow`} />
                    </svg>
                    :
                    <svg style={{height:'30px', width: '30px'}} onClick={()=> setLike(!Like)}>
                        <use  xlinkHref={`/sprite.svg#fire-icon-grey`} />
                    </svg>}
                </Box>
                <Box>
                    <svg style={{height:'30px', width: '30px'}} onClick={()=> setLike(!Like)}>
                        <use  xlinkHref={`/sprite.svg#share-icon`} />
                    </svg>
                </Box>
            </Box>
            <Box
            display='flex'
            >
                <Text>Published: <span style={{fontWeight: 'bold', paddingLeft: '0.25rem'}}>02/02/22</span> </Text>
            </Box>
        </Box>
    </Box>
  )
}

export default SinglePost
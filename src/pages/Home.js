import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'

import { ShopContext } from '../context/shopContext'
import Hero from '../components/Hero'
import ImageWithText from '../components/ImageWithText'

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {

        fetchAllProducts()

    }, [fetchAllProducts])

    if (!products) return <div>Loading...</div>

    return (
        <Box>
            <Hero />
            <Grid templateColumns="repeat(3, 1fr)">
            {
                products.map(product => (
                    <Link to={`/products/${product.handle}`} key={product.id}>
                        <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                            <Image src={product.images[0].src} />
                            <Text 
                                position="absolute"
                                bottom="15%"
                                w="100%"
                                fontWeight="bold"
                            >
                                {product.title}
                            </Text>
                            <Text
                                position="absolute"
                                bottom="5%"
                                w="100%"
                                color="gray.500"
                            >
                                {product.variants[0].price}
                            </Text>
                        </Box>                    
                    </Link>
                ))
            }
            </Grid>
            <ImageWithText reverse 
                image="https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg" 
                heading="Heading" 
                text="Lorem ipsum dolor sit amet" 
            />
            <ImageWithText 
                image="https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg" 
                heading="Second Heading" 
                text="Lorem ipsum dolor sit amet" 
            />
        </Box>
    )
}

export default Home

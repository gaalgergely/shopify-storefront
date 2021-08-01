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
                        <Box _hover={{ opacity: '80%' }} textAlign="center">
                            <Image src={product.images[0].src} />
                            <Text>{product.title}</Text>
                            <Text>{product.variants[0].price}</Text>
                        </Box>                    
                    </Link>
                ))
            }
            </Grid>
            <ImageWithText reverse image="https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg" heading="Heading" />
        </Box>
    )
}

export default Home

import React from 'react'
import { Separator } from './ui/separator'
import ProductPreview, { ProductPreviewProps } from './product-preview'

const FeaturedProducts = () => {
    const products: ProductPreviewProps[] = [
        {
            src: "/product-12.jpg",
            title: "Sweat Pants",
            stars: 4,
            price: 25.66
        },
        {
            src: "/product-10.jpg",
            title: "Cool Red Shoes",
            stars: 5,
            price: 65.99
        },
        {
            src: "/product-4.jpg",
            title: "blue normal t-shirt",
            stars: 3,
            price: 30.25
        },
               {
            src: "/product-4.jpg",
            title: "blue normal t-shirt",
            stars: 3,
            price: 30.25
        },
    ]
    return (
        <div className='grid gap-3 align-middle justify-center '>
            <div className='w-40 justify-self-center'>
                <Separator className="my-4 border-7 rounded-lg" />
            </div>
            <h2 className='text-3xl font-extrabold text-center'>Featured Products</h2>
            <div className='grid lg:grid-cols-4 gap-3'>
                {Array.from({ length: products.length }, (_, i) => (
                    <ProductPreview key={i} Value={products[i]} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
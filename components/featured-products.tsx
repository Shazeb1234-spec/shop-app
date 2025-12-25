import React from 'react'
import { Separator } from './ui/separator'
import ProductPreview from './product-preview'

const FeaturedProducts = () => {
    return (
        <div className='grid gap-3 align-middle justify-center '>
            <div className='w-40 justify-self-center'>
                <Separator className="my-4 border-7 rounded-lg" />
            </div>
            <h2 className='text-3xl font-extrabold text-center'>Featured Products</h2>
            <ProductPreview/>
        </div>
    )
}

export default FeaturedProducts
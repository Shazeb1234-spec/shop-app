import Image from 'next/image'
import React from 'react'

const TrendingProducts = () => {
    return (
        <div className='grid lg:grid-cols-3 mx-38'>
            <Image src={"/placeholder.jpg"} alt="Place holder" width={400} height={800} />
            <Image src={"/placeholder.jpg"} alt="Place holder" width={400} height={800} />
            <Image src={"/placeholder.jpg"} alt="Place holder" width={400} height={800} />
        </div>
    )
}

export default TrendingProducts
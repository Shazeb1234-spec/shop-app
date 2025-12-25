import Image from 'next/image'
import React from 'react'

const TrendingProducts = () => {
    return (
        <div className='grid lg:grid-cols-3 mx-38 gap-5'>
            <Image src={"/orange.jpg"} alt="Place holder" width={800} height={800} />
            <Image src={"/shoewwhite.jpg"} alt="Place holder" width={800} height={800} />
            <Image src={"/girl.jpg"} alt="Place holder" width={800} height={800} />
        </div>
    )
}

export default TrendingProducts
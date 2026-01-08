import Image from 'next/image'
import React from 'react'

const PartnerBrand = () => {

    const brands = [
        {
            src: "/logo-oppo.png",
            alt: "oppo"
        },
        {
            src: "/logo-paypal.png",
            alt: "paypal"
        },
        {
            src: "/logo-philips.png",
            alt: "philips"
        },
    ]


    return (
        <div>
            <div className='grid grid-flow-col justify-center gap-20 '>
                {Array.from({ length: brands.length}, (_, i) => (
                    <Image src={brands[i].src} alt={brands[i].alt} height={200} width={200} />
                ))}
            </div>
        </div>
    )
}

export default PartnerBrand
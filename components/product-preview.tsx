import Image from 'next/image'
import React from 'react'

const ProductPreview = () => {
  return (
    <div>
        <Image src={"/placeholder.jpg"} alt="placeholder" width={500} height={1000} />
    </div>
  )
}

export default ProductPreview
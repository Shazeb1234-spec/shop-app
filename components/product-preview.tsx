import Image from 'next/image'
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { BookmarkIcon, HeartIcon, Star, StarIcon } from 'lucide-react'

const ProductPreview = () => {
  return (
    <div>
      <Image src={"/placeholder.jpg"} alt="placeholder" width={500} height={1000} />
      <h4 className='font-semibold text-2xl'>Red normal T-shirt</h4>
      <div className='grid grid-flow-col justify-start gap-2'>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className='size-4 fill-amber-400 text-amber-400' />
        ))}
      </div>
      <h4 className='font-serif font-semibold text-xl'>$25.85</h4>
    </div>
  )
}

export default ProductPreview
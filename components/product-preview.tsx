import Image from 'next/image'
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { BookmarkIcon, HeartIcon, Star, StarIcon } from 'lucide-react'

export interface ProductPreviewProps{
  src: string,
  title: string,
  stars: number,
  price: number, 

}

const ProductPreview = ({Value}:{Value: ProductPreviewProps}) => {
  
  return (
    <div>

      <Image src={Value.src||"/placeholder.jpg"} alt="placeholder" width={250} height={250} />
      <h4 className='font-semibold text-2xl'>{Value.title}</h4>
      <div className='grid grid-flow-col justify-start gap-2'>
        {Array.from({length:Value.stars},(_,i) => (
          <Star key={i} className='size-4 fill-amber-400 text-amber-400' />
        ))}
      </div>
      <h4 className='font-serif font-semibold text-xl'>${Value.price}</h4>
    </div>
  )
}

export default ProductPreview
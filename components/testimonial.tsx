import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { LucideIcon, Star } from 'lucide-react'
import Image from 'next/image'
import { Label } from '@radix-ui/react-dropdown-menu'

export interface TestimonialProps{
    icon: LucideIcon,
    review: string,
    stars: number,
    src: string,
    name: string,
}

const Testimonial = ({Value}:{Value: TestimonialProps}) => {
    return (
        <div>

            <Card className='justify-items-center text-center align-center'>
                <CardHeader className='justify-items-center'>
                    <Value.icon />
                </CardHeader>
                <CardContent className='grid gap-5 justify-items-center'>
                    <p>
                        {Value.review}
                    </p>
                     <div className='grid grid-flow-col justify-start gap-2'>
                            {Array.from({length:Value.stars},(_,i) => (
                              <Star key={i} className='size-4 fill-amber-400 text-amber-400' />
                            ))}
                          </div>
                    <div>
                        <Image className="rounded-full" src={Value.src } alt="PLaceholder" height={50} width={50} />
                    </div>
                    <Label className='font-extrabold'>{Value.name}</Label>
                </CardContent>
            </Card>
        </div>
    )
}

export default Testimonial  
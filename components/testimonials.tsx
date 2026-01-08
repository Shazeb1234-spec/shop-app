import { Diamond } from 'lucide-react'
import Testimonial, { TestimonialProps } from './testimonial'
import { Separator } from './ui/separator'

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      icon: Diamond,
      name: "Sean Parker",
      review: "Amazing website!",
      src: "/placeholder.jpg",
      stars: 5
    },
    {
      icon: Diamond,
      name: "Sean Parker",
      review: "Amazing website!",
      src: "/placeholder.jpg",
      stars: 5
    },
    {
      icon: Diamond,
      name: "Sean Parker",
      review: "Amazing website!",
      src: "/placeholder.jpg",
      stars: 5
    },
    {
      icon: Diamond,
      name: "Sean Parker",
      review: "Amazing website!",
      src: "/placeholder.jpg",
      stars: 5
    },
    {
      icon: Diamond,
      name: "Sean Parker",
      review: "Amazing website!",
      src: "/placeholder.jpg",
      stars: 5
    }

  ]

  return (
    <div className='grid gap-3 align-middle justify-center '>
      <div className='w-40 justify-self-center'>
        <Separator className="border-7 rounded-lg" />
      </div>
      <h2 className='text-3xl font-extrabold text-center'>Testimonials</h2>
      <div className='grid lg:grid-cols-5 gap-10'>
        {Array.from({ length: testimonials.length }, (_, i) => (
          <Testimonial key={i} Value={testimonials[i]} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
import Image from 'next/image'
import { Button } from './ui/button'
import { IconArrowNarrowRight } from '@tabler/icons-react'

const Sale = () => {
    return (
        <div className="grid lg:grid-cols-2 p-10 gap-10">

            <div className='mx-30 grid gap-5'>

                <h1 className='font-extrabold text-8xl'>Give Your Workout a New Style!</h1>

                <p className='text-2xl gap-4'>
                    Success isn't always about greatness.
                    Its about consistency. Consistent
                    hard work gains success. Greatness
                    will come.
                </p>

                <Button className="bg-secondary text-secondary-foreground hover-bg-secondary border-r-8" variant="outline" size="sm">
                    Explore Now <IconArrowNarrowRight />
                </Button>

            </div>

            <div>
                <Image src="/hard.jpg" alt="hardWorking" height={800} width={800} />
            </div>
            
        </div>
    )
}

export default Sale

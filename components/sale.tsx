import Image from 'next/image'
import { Button } from './ui/button'
import { IconArrowNarrowRight } from '@tabler/icons-react'

const Sale = () => {
    return (

        <div className="grid lg:grid-cols-2 p-5 bg- justify-center align-middle bg-radial-[at_10%_10%] from-sky-300 via-b;ue-400 to indigo-900 to 90%">

            <div>
                <Image src="/exclusive.png" alt="hardWorking" height={400} width={400} />
            </div>
            <div className='mx-10 grid gap-5'>
                <h4>Exclusively Available on RedStore</h4>
                <h1 className='font-extrabold text-8xl '>Smart Band 4</h1>
                <p className='text-2xl gap-4'>
                    The Mi Smart Band 4 features a 39.9% larger
                    (than Mi Band 3) AMOLED color full-touch
                    display with adjustible brightness, so
                    everything is clear as can be.
                </p>
                <Button className="bg-secondary text-secondary-foreground hover-bg-secondary border-r-8" variant="outline" size="sm">
                    Buy Now <IconArrowNarrowRight />
                </Button>
            </div>
        </div>
    )
}

export default Sale

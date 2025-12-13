import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 ">
            <div>
                <h1>Give Your Workout a New Style!</h1>
                <p>Success isn't always aout greatness.
                    Its about consistency. Consistent
                    hard work gains success. Greatness
                    will come.</p>

            </div>

            <div>
                <Image src="/hard.jpg" alt="hardWorking" height={400} width={400}/>
            </div>
        </div>
    )
}

export default Hero
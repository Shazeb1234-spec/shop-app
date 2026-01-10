import { Label } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-10 bg-radial-[at_90%_90%] from-green-500 via-purple-600 to purple-100 to 90% p-10'>
            <div className='grid gap-3'>
                <Label className='font-extrabold '>Download Our App</Label>
                <Label className='text-sm'>Download Our App For Android and Ios Mobile Phone</Label>
            </div>
            <div>
                <Image src={"/logo.png"} alt="sign" height={300} width={300} />
            </div>
            <div className='grid gap-3'>
                <Label className='font-extrabold '>Useful Links</Label>
                <Label className='text-sm'>Coupons</Label>
            </div>
            <div className='grid gap-3'>
                <Label className='font-extrabold '>Follow Us</Label>
                <Label className='text-sm'>Facebook</Label>
            </div>
        </div>
    )
}

export default Footer
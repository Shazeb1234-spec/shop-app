import { Label } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const followus = [
        {
            href: "#",
            title: "Facebook"
        },
        {
            href: "#",
            title: "Twitter"
        },
        {
            href: "#",
            title: "Instagram"
        },
        {
            href: "#",
            title: "Youtube"
        },
    ]

    const usefullinks = [
        {
            href: "#",
            title: "Coupons"
        },
        {
            href: "#",
            title: "Blog Post"
        },
        {
            href: "#",
            title: "Return Policy"
        },
        {
            href: "#",
            title: "Join Affiliate"
        },

    ]
    return (
        <div className='grid lg:grid-cols-4 gap-10 bg-radial-[at_90%_90%] from-green-400 via-green-500 to purple-100 to 90% p-10'>
            <div className='grid gap-3'>
                <Label className='font-extrabold '>Download Our App</Label>
                <Label className='text-sm'>Download Our App For Android and Ios Mobile Phone</Label>
                <div className='grid lg:grid-cols-2'>
                    <Image src={'/google.png'} alt='google' height={150} width={150} />
                    <Image src={'/apple-1.png'} alt='google' height={150} width={150} />
                </div>
            </div>
            <div>
                <Image src={"/logo.png"} alt="sign" height={300} width={300} />
            </div>
            <div>
                <Label className='font-extrabold '>Useful Links</Label>
                {Array.from({ length: usefullinks.length }, (_, i) => (
                    <Link key={usefullinks[i].title} href={usefullinks[i].href} className='text-sm'>
                        <Label className='text-sm'>{usefullinks[i].title}</Label>
                    </Link>
                ))}

            </div>
            <div>
                <Label className='font-extrabold '>Follow Us</Label>
                {Array.from({ length: followus.length }, (_, i) => (
                    <Link key={followus[i].title} href={followus[i].href} className='text-sm'>
                        <Label className='text-sm'>{followus[i].title}</Label>
                    </Link>
                ) )}
            </div>
        </div>
    )
}

export default Footer
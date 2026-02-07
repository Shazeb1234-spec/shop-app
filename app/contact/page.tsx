import ContactForm from '@/components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Page = () => {
    return (
        <div className='grid grid-cols-2 p-10 bg-card'>
            <Card className='border-0 shadow-none'>
                <CardHeader>
                    <CardTitle className='text-3xl'>Contact us</CardTitle>
                    <CardDescription>Get in Touch with us if you have any request</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                            <Label className='text-sm font-mono'>Phone Number: +87484848 474774</Label>
                            <Label className='text-sm font-mono'>Email: shopping.website@gmail.com</Label>
                            <Label className='text-sm font-mono'>Address: 123 Avenue Street</Label>
                    </div>
                </CardContent>
            </Card>
            <ContactForm className='w-full max-w-md'/>
        </div>
    )
}

export default Page
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'

const Page = () => {
  return (
    
        <Card>
            <CardTitle className='text-3xl'>Your Account</CardTitle>
            <CardContent>
                <Label className='text-sm'>Name: John</Label>
                <Label className='text-sm'>Last Name: Doe</Label>
                <Label className='text-sm'>Email: john.doe@gmail.com</Label>
                <Label className='text-sm'>Password: bhuuhuuhyyst</Label>
                <Label className='text-sm'>Time Spent: 1 hour 45 minutes  55 seconds</Label>
            </CardContent>
        </Card>
  )
}

export default Page
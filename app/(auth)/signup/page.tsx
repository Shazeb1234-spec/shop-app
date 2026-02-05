import SignUpForm from '@/components/signup-form'
import React from 'react'

const Page = () => {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10 sm:p-20'>
      <div className='w-full max-w-sm '>
        <SignUpForm />
      </div>
    </div>
  )
}

export default Page
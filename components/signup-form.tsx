import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'

const SignUpForm = ({
    className,
    ...props
}: React.ComponentProps<"div">) => {

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Sign up to your acount</CardTitle>
                    <CardDescription>Enter your email below to sign up to your account</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}

export default SignUpForm
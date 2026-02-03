import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Field, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import Link from 'next/link'

const LoginForm = ({
    className,
    ...props
}: React.ComponentProps<"div">) => {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props} >
            <Card>

                <CardHeader>
                    <CardTitle>Login to your acount</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action="">
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor='email'>Email</FieldLabel>
                                <Input id='email' type='email' placeholder='s.a@example.com' required />
                            </Field>
                            <Field>
                                <div className='flex items-center'>
                                <FieldLabel htmlFor='password'>Password</FieldLabel>
                                <Link href={"#"} className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>Forgot Your Password</Link>
                                </div>
                                <Input id='password' type='password' placeholder='ABCat123' required />
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>

            </Card>
        </div>
    )
}

export default LoginForm
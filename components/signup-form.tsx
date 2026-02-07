import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'
import { Field, FieldDescription, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'

const SignUpForm = ({
    className,
    ...props
}: React.ComponentProps<"div">) => {

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
              <div className={cn("flex flex-col gap-6", className)} {...props} >
            <Card>

                <CardHeader>
                    <CardTitle>Sign up to your acount</CardTitle>
                    <CardDescription>Enter your email and password below to login to your account</CardDescription>
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
                            <Field>
                                <Button type='submit'>Sign up</Button>
                                <Button variant={"outline"}>Sign up with Google</Button>
                                <FieldDescription>
                                    Already Have an account??? <Link href={'/login'}>Login</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>

            </Card>
        </div>
        </div>
    )
}

export default SignUpForm
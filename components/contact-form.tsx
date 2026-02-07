import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'
import { Field, FieldDescription, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

const ContactForm = ({
    className,
    ...props
}: React.ComponentProps<"div">) => {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <div className={cn("flex flex-col gap-6", className)} {...props} >
                <Card>

                    <CardHeader>
                        <CardTitle>Message us</CardTitle>
                        <CardDescription>Enter your email and Name below to message us for any request</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action="">
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor='name'>Name</FieldLabel>
                                    <Input id='name' type='name' placeholder='John Doe' required />

                                </Field>
                                <Field>
                                    <FieldLabel htmlFor='email'>Email</FieldLabel>
                                    <Input id='email' type='email' placeholder='s.a@example.com' required />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
                                    <FieldDescription>Enter your message below.</FieldDescription>
                                    <Textarea id="textarea-message" placeholder="Type your message here." />
                                </Field>
                                <Field>
                                    <Button type='submit'>Send</Button>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}

export default ContactForm
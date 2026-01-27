"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Sun } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type CartItem = {
  id: number,
  src: string,
  title: string,
  price: number,
  currency: string,
  quantity: number,
  subtotal: number,

}

const Page = () => {

  const [products, setProducts] = useState<CartItem[]>(
    [
      {
        id: 1,
        src: "/placeholder.jpg",
        title: "Red T-shirt",
        price: 50.00,
        currency: "$",
        quantity: 1,
        subtotal: 50.00
      },
      {
        id: 2,
        src: "/placeholder.jpg",
        title: "Blue Jeans",
        price: 80.00,
        currency: "$",
        quantity: 1,
        subtotal: 80.00
      },
      {
        id: 3,
        src: "/placeholder.jpg",
        title: "Black Hoodie",
        price: 120.00,
        currency: "$",
        quantity: 1,
        subtotal: 120.00
      },
      {
        id: 4,
        src: "/placeholder.jpg",
        title: "White Sneakers",
        price: 150.00,
        currency: "$",
        quantity: 1,
        subtotal: 150.00
      },
      {
        id: 5,
        src: "/placeholder.jpg",
        title: "Baseball Cap",
        price: 25.00,
        currency: "$",
        quantity: 1,
        subtotal: 25.00
      },
      {
        id: 6,
        src: "/placeholder.jpg",
        title: "Leather Belt",
        price: 40.00,
        currency: "$",
        quantity: 1,
        subtotal: 40.00
      }
    ]
  )

    const subtotal = products.reduce((sum, item) => sum + item.subtotal, 0 )
    const tax = (subtotal * 18 ) /100
    const total = (subtotal + tax)

  return (
    <div className='lg:mx-auto'>
      <Table>
        <TableHeader className='bg-blue-400'>
          <TableRow>
            <TableHead className='w-[450px] '>Product</TableHead>
            <TableHead className='w-[150px]'>Quantity</TableHead>
            <TableHead className='text-right w-[150px]'>Subtotal</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.title}>
              <TableCell className="grid grid-cols-3 gap-x-0 place-content-center h-30 place-items-start">
                <Image src={product.src} alt={product.title} width={100} height={100} />
                <div className=''>
                  <div className='grid mt-5 gap-0'>
                    <Label>{product.title}</Label>
                    <div className='grid lg:grid-cols-2'>
                      <Label>Price: {`${product.currency} ${product.price}`}</Label>
                      <Button variant={'destructive'} size={'sm'} color='red' >Remove</Button>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Input value={product.quantity} onChange={(e) => {
                  const updated = [...products]
                  updated[index].quantity = Number(e.target.value)
                  updated[index].subtotal = Number(e.target.value )* product.price
                  setProducts(updated)
                }} type='number' ></Input>
              </TableCell>
              <TableCell className='text-right'>{`${product.currency} ${product.subtotal}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className='font-extrabold'>
          
          <TableRow>
            <TableCell></TableCell>
            <TableCell colSpan={2}>
              <Separator className='my-4 border-7 rounded-lg bg-blue-400'/>
              </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>SubTotal</TableCell>
            <TableCell className="text-right">$ {subtotal}</TableCell>
          </TableRow>
          <TableRow>
             <TableCell></TableCell>
            <TableCell>Tax</TableCell>
            <TableCell className="text-right">$ {tax}</TableCell>
          </TableRow>
          <TableRow>
             <TableCell></TableCell>
            <TableCell>Total</TableCell>
            <TableCell className="text-right">$ {total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default Page
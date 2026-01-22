
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'

const Page = () => {

  const products = [
    {
      src: "/placeholder.jpg",
      title: "Red T-shirt",
      price: 50.00,
      currency: "$",
      quantity: 1,
      subtotal: 50.00
    },
    {
      src: "/placeholder.jpg",
      title: "Blue Jeans",
      price: 80.00,
      currency: "$",
      quantity: 1,
      subtotal: 80.00
    },
    {
      src: "/placeholder.jpg",
      title: "Black Hoodie",
      price: 120.00,
      currency: "$",
      quantity: 1,
      subtotal: 120.00
    },
    {
      src: "/placeholder.jpg",
      title: "White Sneakers",
      price: 150.00,
      currency: "$",
      quantity: 1,
      subtotal: 150.00
    },
    {
      src: "/placeholder.jpg",
      title: "Baseball Cap",
      price: 25.00,
      currency: "$",
      quantity: 1,
      subtotal: 25.00
    },
    {
      src: "/placeholder.jpg",
      title: "Leather Belt",
      price: 40.00,
      currency: "$",
      quantity: 1,
      subtotal: 40.00
    }
  ]


  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  return (
    <div>
      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Subtotal</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.title}>
              <TableCell className="grid grid-cols-3 gap-x-0 place-content-center h-30 place-items-start">
                <Image src={product.src} alt={product.title} width={100} height={100} />
                <div className='col-span-2'>
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
                <Input value={product.quantity} ></Input> 
              </TableCell>
              <TableCell>{`${product.currency} ${product.subtotal}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default Page
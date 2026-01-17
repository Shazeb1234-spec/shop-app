import ProductPreview, { ProductPreviewProps } from '@/components/product-preview'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const Page = () => {

    const products: ProductPreviewProps[] = [
        {
            src: "/product-12.jpg",
            title: "Sweat Pants",
            stars: 4,
            price: 25.66
        },
        {
            src: "/product-10.jpg",
            title: "Cool Red Shoes",
            stars: 5,
            price: 65.99
        },
        {
            src: "/product-4.jpg",
            title: "blue normal t-shirt",
            stars: 3,
            price: 30.25
        },
        {
            src: "/product-4.jpg",
            title: "blue normal t-shirt",
            stars: 3,
            price: 30.25
        },
        {
            src: "/product-12.jpg",
            title: "Sweat Pants",
            stars: 4,
            price: 25.66
        },
        {
            src: "/product-10.jpg",
            title: "Cool Red Shoes",
            stars: 5,
            price: 65.99
        },
        {
            src: "/product-4.jpg",
            title: "blue normal t-shirt",
            stars: 3,
            price: 30.25
        },
        {
            src: "/product-4.jpg",
            title: "blue normal t-shirt",
            stars: 3,
            price: 30.25
        },
    ]

    return (

        <div className="grid gap-30">
            <div className='grid gap-3 align-middle justify-center'>
                <div className='grid grid-cols-2 my-15'>
                    <h1 className='text-5xl font-extrabold text-left'>All Products</h1>
                    <div className='justify-self-end'>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Default Sorting" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sorting</SelectLabel>
                                    <SelectItem value="Price">Sort by Price</SelectItem>
                                    <SelectItem value="Popularity">Sort by Popularity</SelectItem>
                                    <SelectItem value="Rating">Sort by Rating</SelectItem>
                                    <SelectItem value="Sale">Sort by Sale</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 gap-3'>
                    {Array.from({ length: products.length }, (_, i) => (
                        <ProductPreview key={i} Value={products[i]} />
                    ))}
                </div>
                 <div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default Page
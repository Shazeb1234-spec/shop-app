import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import LatestProducts from "@/components/latest-products";
import Sale from "@/components/sale";
import TrendingProducts from "@/components/trending-products";
import Image from "next/image";

export default function Home() {
  return (
  <div className="grid gap-30">
    <Hero  />
    <TrendingProducts />
    <FeaturedProducts />
    <LatestProducts />
    <Sale />
    
  </div>
  );
}

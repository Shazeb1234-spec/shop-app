import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import LatestProducts from "@/components/latest-products";
import PartnerBrand from "@/components/partner-brand";
import Sale from "@/components/sale";
import Testimonials from "@/components/testimonials";
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
    <Testimonials />
    <PartnerBrand />
    
  </div>
  );
}

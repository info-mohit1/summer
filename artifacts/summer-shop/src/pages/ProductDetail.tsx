import { useParams, Link } from "wouter";
import { ArrowLeft, Star, Truck, ShieldCheck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "react-hot-toast";
import productsData from "@/data/products.json";
import { Product } from "@/components/ProductCard";
import NotFound from "./not-found";

export default function ProductDetail() {
  const params = useParams();
  const product = productsData.find(p => p.id === params.id) as Product | undefined;

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    toast.success(`Added ${product.name} to cart!`);
  };

  return (
    <div className="min-h-[100dvh] bg-background py-10">
      <div className="container mx-auto px-4">
        <Link href="/products" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>
        
        <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm flex flex-col md:flex-row">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 p-6 md:p-12 bg-muted/20 flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col">
            <div className="mb-2">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-wider font-semibold">
                {product.brand}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 bg-secondary/10 px-3 py-1 rounded-full text-secondary font-medium">
                <Star className="w-4 h-4 fill-secondary" />
                {product.rating}
              </div>
              <span className="text-sm text-muted-foreground">{product.category}</span>
            </div>
            
            <div className="text-4xl font-extrabold text-foreground mb-8">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="mt-auto space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Quality Assured
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  Fast Shipping
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                <Button size="lg" className="flex-1 h-14 text-lg rounded-xl shadow-md hover:shadow-lg transition-all" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/products/${product.id}`} className="block h-full cursor-pointer">
        <Card className="h-full overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow flex flex-col bg-card">
          <div className="relative aspect-square overflow-hidden bg-muted/30">
            <img 
              src={product.image} 
              alt={product.name} 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <Badge className="absolute top-3 right-3 bg-white/90 text-black hover:bg-white/90 backdrop-blur-sm border-0 font-medium">
              {product.category}
            </Badge>
          </div>
          <CardContent className="p-5 flex-1 flex flex-col">
            <div className="text-xs text-muted-foreground mb-1 font-medium tracking-wide uppercase">{product.brand}</div>
            <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2 flex-1">{product.name}</h3>
            
            <div className="flex items-center gap-1 mt-auto">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </CardContent>
          <CardFooter className="p-5 pt-0 flex items-center justify-between">
            <span className="text-xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 shadow-sm" asChild>
              <div onClick={(e) => e.preventDefault()}>
                <ShoppingCart className="h-4 w-4" />
              </div>
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}

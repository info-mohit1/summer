import { Link } from "wouter";
import { Sun } from "lucide-react";
import { SiInstagram, SiX, SiFacebook } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sun className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                SummerShop
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Your one-stop destination for all things summer. From beach days to backyard barbecues, we've got you covered with premium essentials.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@summershop.com</li>
              <li>1-800-SUN-SAND</li>
              <li>123 Boardwalk Ave<br/>Malibu, CA 90265</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiX className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} SummerShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

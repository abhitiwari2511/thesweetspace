import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductCard({
  id,
  name,
  description,
  category,
  price,
  imageUrl,
  className,
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card
      className={cn(
        "overflow-hidden bg-zinc-100 shadow-lg w-[22rem] h-[30rem] flex text-center flex-col",
        className
      )}
    >
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-105"
        />

        <Badge className="absolute top-3 right-3 bg-purple-700 hover:bg-purple-600 capitalize">
          {category}
        </Badge>
      </div>

      <CardContent className="flex-1">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="text-lg font-bold text-purple-600">
          {formatPrice(price)}
        </div>
      </CardContent>

      <CardFooter className="px-10 pb-6 flex">
        <Button
          asChild
          variant="default"
          className="w-full bg-purple-700 hover:bg-purple-600"
        >
          <Link to={`/products/${id}`} onClick={() => window.scrollTo(0,0)}>
            View Details
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

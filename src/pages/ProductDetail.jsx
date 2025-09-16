import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Find product by ID
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-20 mt-20 flex items-center justify-center">
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl text-zinc-900 font-bold mb-4">
            Product Not Found
          </h2>
          <p className="text-zinc-700 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button
            className="cursor-pointer bg-purple-700 hover:bg-purple-800 text-white"
            onClick={() => navigate("/products")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleBuyNow = () => {
    setIsLoading(true);

    // Construct WhatsApp message with product details
    const message = `Hello, I'm interested in purchasing the ${
      product.name
    } (${formatPrice(
      product.price
    )}). Could you provide more information? And please let me know the payment and delivery options.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // your WhatsApp number
    const phoneNumber = "+911234567890";

    // whatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-[70rem] mx-auto pt-24 pb-20">
      <div className="container mt-20 px-6 max-w-6xl">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/products")}
          className="mb-8 bg-white hover:bg-gray-100 text-zinc-900 border-zinc-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden aspect-square">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Badge className="bg-purple-700 hover:bg-purple-600 mb-4 capitalize">
              {product.category}
            </Badge>

            <h1 className="text-4xl text-zinc-900 font-bold mb-4">
              {product.name}
            </h1>

            <div className="text-3xl font-bold text-purple-700 mb-6">
              {formatPrice(product.price)}
            </div>

            <p className="text-zinc-700 text-lg mb-8">{product.description}</p>

            <Separator className="mb-8" />

            {/* Actions */}
            <div className="space-y-4">
              <Button
                className="w-full cursor-pointer bg-purple-700 hover:bg-purple-800 text-white py-6 text-lg"
                onClick={handleBuyNow}
                disabled={isLoading}
              >
                {isLoading ? "Preparing Your Order..." : "Buy Now via WhatsApp"}
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="w-full bg-cyan-200 cursor-pointer hover:bg-cyan-300 text-zinc-900 border-none py-6 text-lg"
                onClick={() => { 
                  window.scrollTo(0,0)
                  navigate("/products")}
                }
              >
                Continue Shopping
              </Button>
            </div>

            {/* Additional Product Info */}
            <div className="mt-8 pt-8 border-t border-zinc-200">
              <h3 className="text-xl text-zinc-900 font-bold mb-4">
                About This Product
              </h3>
              <p className="text-zinc-700">
                Handcrafted with love and the finest ingredients. Each{" "}
                {product.name.toLowerCase()} is made fresh to order, ensuring
                the perfect taste and quality for your special moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

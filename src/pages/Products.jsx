import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { products as allProducts } from "../data/products";

const categories = [
  { value: "all", label: "All" },
  { value: "cakes", label: "Cakes" },
  { value: "cookies", label: "Cookies" },
  { value: "pastries", label: "Pastries" },
  { value: "breads", label: "Breads" },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [sortOption, setSortOption] = useState("popularity");

  const categoryParam = searchParams.get("category") || "all";

  useEffect(() => {
    let finalProduct = [...products];

    // Filter by search term
    if (searchTerm) {
      finalProduct = finalProduct.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // apply sorting
    if (sortOption === "price-asc") {
      finalProduct.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      finalProduct.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name") {
      finalProduct.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(finalProduct);
  }, [searchTerm, sortOption, products]);

  useEffect(() => {
    const newProduct =
      categoryParam === "all"
        ? allProducts
        : allProducts.filter(
            (product) =>
              product.category.toLowerCase() === categoryParam.toLowerCase()
          );
    setProducts(newProduct);
    setFilteredProducts(newProduct);
  }, [categoryParam]);

  const handleCategoryChange = (val) => {
    if (val === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ search: searchTerm, category: val, sort: sortOption });
    }
  };

  return (
    <div className="min-h-screen max-w-[70rem] mx-auto pt-10">
        <div className="container mx-auto mt-20 px-6">
          <header className="mb-10 text-center">
            <div className="text-4xl md:text-6xl text-zinc-900 font-bold mb-4">
              Our Products
            </div>
            <p className="text-zinc-700 max-w-2xl text-lg mx-auto">
              Explore our exquisite selection of cakes and pastries, made with
              precision and passion.
            </p>
          </header>

          {/* Horizontal Filter Bar */}
          <div className="rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={
                      categoryParam === category.value ? "default" : "outline"
                    }
                    onClick={() => handleCategoryChange(category.value)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      categoryParam === category.value
                        ? "bg-amber-800 text-white hover:bg-amber-900"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300"
                    }`}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Search and Sort */}
              <div className="flex flex-col sm:flex-row gap-4 lg:items-center">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full sm:w-64 border-gray-300 rounded-lg"
                  />
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    Sort by:
                  </span>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-40 border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-300">
                      <SelectItem value="popularity">Popularity</SelectItem>
                      <SelectItem value="price-asc">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-desc">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full mt-20">
            {filteredProducts.length > 0 ? (
              <div className="flex flex-wrap lg:flex-nowrap justify-center px-4 gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    category={product.category}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    small
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  No products found
                </h3>
                <p className="text-zinc-700">
                  Try adjusting your filters or search criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Products;

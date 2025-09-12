import ProductCard from "./ProductCard";
import { products } from "../data/products";
  
const FeatureSection = () => {
  return (
    <div className="relative mt-20 py-4 flex flex-col items-center">
      <h1 className="text-5xl text-zinc-900 font-bold mb-16">Featured Delights</h1>
      <div className="flex flex-nowrap justify-evenly gap-10 w-full max-w-[65rem]">
        {products.map(({ id, name, description, category, price, imageUrl }) => (
          <ProductCard
            id={id}
            category={category}
            price={price}
            name={name}
            description={description}
            imageUrl={imageUrl}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

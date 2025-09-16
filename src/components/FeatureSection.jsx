import ProductCard from "./ProductCard";
import { products } from "../data/products";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 py-4 mx-auto flex max-w-[70rem] flex-col items-center">
      <h1 className="text-6xl font-['sans'] text-zinc-900 font-bold mb-16 text-center">
        Featured Delights
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 w-full px-4">
        {products.map(
          ({ id, name, description, category, price, imageUrl }) => (
            <ProductCard
              id={id}
              category={category}
              price={price}
              name={name}
              description={description}
              imageUrl={imageUrl}
              key={id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FeatureSection;

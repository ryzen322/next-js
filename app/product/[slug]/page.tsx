import { Production, ProductPost } from "./ProductPost";

async function ProductQuantity({ slug }: { slug: string }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  const data: Production = await res.json();

  return <h1>{data.body}</h1>;
}

const Product = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  return (
    <div className=" text-black mt-12 w-full h-full bg-stone-400">
      <ProductPost slug={slug} />
      <ProductQuantity slug={slug} />
    </div>
  );
};

export default Product;

import { useQuery } from "@tanstack/react-query";
import { type Product } from "../types";
import { getProducts } from "../service/product.service";
import { Link } from "react-router-dom";

const Product = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }
  return (
    <div>
      <h1>Warehouse Products</h1>
      <Link to="/products/add">Add Product</Link>
      <table className="w-[720px] border border-gray-200">
        <thead>
          <tr className="border border-gray-200">
            <th className="p-2 font-semibold">No</th>
            <th className="p-2 font-semibold">Product Name</th>
            <th className="p-2 font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((product: Product, index: number) => (
            <tr className="border border-gray-200" key={product.id}>
              <td className="p-2">{index + 1}</td>

              <td className="p-2">{product.name}</td>

              <td className="p-2">
                <Link
                  className="py-2 px-3 rounded-md bg-blue-200 hover:bg-blue-300"
                  to={`/products/${product.id}`}
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../service/product.service";

export default function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(Number(id)),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <div>
      <h1 className="">Product Detail</h1>
      <br />
      <h2 className="font-semibold text-xl">{data?.name}</h2>
      <p className="badge bg-blue-200 rounded-md text-sm">{data?.category}</p>
      <p className="text-gray-300">{data?.brand}</p>
      <p className="text-green-600 text-lg">${data?.price}</p>
      <p className="font-semibold text-sm">Stock: {data?.stock}</p>
      <p className="text-sm bg-yellow-200">Warehouse: {data?.warehouse}</p>
    </div>
  );
}

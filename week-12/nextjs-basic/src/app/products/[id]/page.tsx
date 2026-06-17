import React from "react";
import ProductDetail from "./ProductDetail";

type Props = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <>
      <ProductDetail id={Number(id)} />
    </>
  );
};

export default page;

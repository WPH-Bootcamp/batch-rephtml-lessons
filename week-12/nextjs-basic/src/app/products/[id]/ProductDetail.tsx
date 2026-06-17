import React from "react";

type ProductDetailProp = {
  id: number;
};

const ProductDetail = ({ id }: ProductDetailProp) => {
  return <div>ProductDetail {id}</div>;
};

export default ProductDetail;

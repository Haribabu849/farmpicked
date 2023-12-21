import { useParams } from "react-router-dom";
import { AllProducts } from "../Products";

function ProductPage() {
  const { id } = useParams();
  const index = AllProducts.findIndex((e) => {
    return e.itemName === id;
  });
  const item = AllProducts[index];
  console.log(item);

  return (
    <div>
      <p>{item.itemName}</p>
      <p>{item.discount}</p>
    </div>
  );
}

export default ProductPage;

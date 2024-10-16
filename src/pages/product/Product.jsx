import "./product.scss";
import { Single } from "../../components";
import { singleProduct } from "../../data";
//Fetch Data and send it to single component
const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;

import './Product.css';
import ProductInfo from '../ProductInfo';
import Details from '../Details';

const Product = (products) => {
    return (
        <div className="product__container">
            <img className="product__image" alt={products.product[0].id} src={ window.location.origin + products.product[0].infos.img_url }/>
            <ProductInfo infos={products.product[0].infos}/>
            <Details details={products.product[0].details}/>
        </div>
    )
}

export default Product;
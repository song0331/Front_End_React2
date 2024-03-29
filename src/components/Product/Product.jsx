import 'Product/Product.css';
import product_data from 'data/product.json';

export default function Product() {

  return (
    <ul className='Product_wrapper'>
      {
        product_data.map((item) => {
          return (
            <li key={item.id} className="product">
              <a href="#">
                <img src={`/images/${item.id + 1}.jpg`} alt={item.product_name} />
                <div className='product_info'>
                  <span className='delivery_type'>{item.delivery_type}</span>
                  <h3 className='product_name'>{item.product_name}</h3>
                  <p className='product_descriptions'>{item.product_descriptions}</p>
                  <span className='product_price'>{item.product_price} 원</span>
                </div>
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}